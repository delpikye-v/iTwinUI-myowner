/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import { useLayoutEffect } from './useIsomorphicLayoutEffect.js';
import usePrevious from './usePrevious.js';

/** `[number, number]` means that we're still guessing. `null` means that we got the correct `visibleCount`. */
type GuessRange = [number, number] | null;

/** First guess of the number of items that overflows. We refine this guess with subsequent renders. */
const STARTING_MAX_ITEMS_COUNT = 2;

/**
 * Hook that returns the number of items that should be visible based on the size of the container element.
 *
 * The returned number should be used to render the element with fewer items.
 *
 * @private
 * @param items Items that this element contains.
 * @param disabled Set to true to disconnect the observer.
 * @param dimension 'horizontal' (default) or 'vertical'
 * @returns [callback ref to set on container, stateful count of visible items]
 *
 * @example
 * const items = Array(10).fill().map((_, i) => <span>Item {i}</span>);
 * const [ref, visibleCount] = useOverflow(items);
 * ...
 * return (
 *   <div ref={ref}>
 *     {items.slice(0, visibleCount)}
 *   </div>
 * );
 */
export const useOverflow = (
  // TODO: Try more to remove this prop, if possible.
  itemsLength: number,
  disabled = false,
  orientation: 'horizontal' | 'vertical' = 'horizontal',
  container: HTMLElement | undefined,
) => {
  const initialVisibleCount = Math.min(itemsLength, STARTING_MAX_ITEMS_COUNT);

  const [visibleCount, _setVisibleCount] = React.useState<number>(() =>
    disabled ? itemsLength : initialVisibleCount,
  );

  /**
   * Ensures that `visibleCount <= itemsLength`
   */
  const setVisibleCount = React.useCallback(
    (setStateAction: React.SetStateAction<typeof visibleCount>) => {
      _setVisibleCount((prev) => {
        const newVisibleCount =
          typeof setStateAction === 'function'
            ? setStateAction(prev)
            : setStateAction;

        return Math.min(newVisibleCount, itemsLength);
      });
    },
    [itemsLength],
  );

  const [visibleCountGuessRange, setVisibleCountGuessRange] =
    React.useState<GuessRange>(disabled ? null : [0, initialVisibleCount]);
  const isStabilized = visibleCountGuessRange == null;

  /**
   * Call this function to guess the new `visibleCount`.
   * The `visibleCount` is not changed if the correct `visibleCount` has already been found.
   */
  const isGuessing = React.useRef(false);
  const guessVisibleCount = React.useCallback(() => {
    // If disabled or already stabilized
    if (disabled || isStabilized || isGuessing.current) {
      return;
    }

    // We need to wait for the ref to be attached so that we can measure available and required sizes.
    if (container == null) {
      return;
    }

    try {
      isGuessing.current = true;

      const dimension = orientation === 'horizontal' ? 'Width' : 'Height';
      const availableSize = container[`offset${dimension}`];
      const requiredSize = container[`scroll${dimension}`];

      const isOverflowing = availableSize < requiredSize;

      console.log('RUNNING', {
        visibleCountGuessRange: visibleCountGuessRange.toString(),
        myRef: container,
        // isOverflowing,
        visibleCount,
        availableSize,
        requiredSize,
      });

      // We have already found the correct visibleCount
      if (
        (visibleCount === itemsLength && !isOverflowing) ||
        visibleCountGuessRange[1] - visibleCountGuessRange[0] === 1 // TODO: I think this causes issue when item count is 1 and so the initial range is [0, 1]
      ) {
        console.log('STABILIZED');
        setVisibleCountGuessRange(null);
        return;
      }

      // Before the main logic, the max guess MUST be >= the correct visibleCount for the algorithm to work.
      // If not:
      // - double the max guess and visibleCount: since we need to overflow.
      // - set min guess to current visibleCount: since underflow means correct visibleCount >= current visibleCount.
      if (visibleCountGuessRange[1] === visibleCount && !isOverflowing) {
        const doubleOfMaxGuess = visibleCountGuessRange[1] * 2;

        setVisibleCountGuessRange([visibleCount, doubleOfMaxGuess]);
        setVisibleCount(doubleOfMaxGuess);

        return;
      }

      let newVisibleCountGuessRange = visibleCountGuessRange;

      if (isOverflowing) {
        // overflowing = we guessed too high. So, new max guess = half the current guess
        newVisibleCountGuessRange = [visibleCountGuessRange[0], visibleCount];
      } else {
        // not overflowing = maybe we guessed too low? So, new min guess = half of current guess
        newVisibleCountGuessRange = [visibleCount, visibleCountGuessRange[1]];
      }

      setVisibleCountGuessRange(newVisibleCountGuessRange);

      // Next guess is always the middle of the new guess range
      setVisibleCount(
        Math.floor(
          (newVisibleCountGuessRange[0] + newVisibleCountGuessRange[1]) / 2,
        ),
      );
    } finally {
      isGuessing.current = false;
    }
  }, [
    container,
    disabled,
    isStabilized,
    itemsLength,
    orientation,
    setVisibleCount,
    visibleCount,
    visibleCountGuessRange,
  ]);

  const previousVisibleCount = usePrevious(visibleCount);
  const previousVisibleCountGuessRange = usePrevious(visibleCountGuessRange);
  const previousContainerRef = usePrevious(container);

  useLayoutEffect(() => {
    if (disabled) {
      return;
    }

    if (
      visibleCount !== previousVisibleCount ||
      container !== previousContainerRef ||
      isStabilized
    ) {
      guessVisibleCount();
    }
  }, [
    container,
    disabled,
    guessVisibleCount,
    isStabilized,
    previousContainerRef,
    previousVisibleCount,
    previousVisibleCountGuessRange,
    visibleCount,
    visibleCountGuessRange,
  ]);

  // const guessVisibleCountCalled = React.useRef(false);

  // TODO: Replace eslint-disable with proper listening to containerRef resize
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useLayoutEffect(() => {
  //   // if (disabled || guessVisibleCountCalled.current) {
  //   //   return;
  //   // }
  //   // guessVisibleCountCalled.current = true;
  //   if (disabled) {
  //     return;
  //   }

  //   guessVisibleCount();
  //   // }, [disabled, guessVisibleCount]);
  // });

  // const mergedRefs = useMergedRefs(containerRef);

  return [React.useRef(container), visibleCount] as const;
};
