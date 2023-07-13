/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import * as React from 'react';
import cx from 'classnames';
import { Box, useGlobals } from '../../utils/index.js';
import type { CommonProps } from '../../utils/index.js';
import { Button } from '../../Buttons/index.js';

export type FilterButtonBarTranslation = {
  filter: string;
  clear: string;
};

const defaultStrings: FilterButtonBarTranslation = {
  filter: 'Filter',
  clear: 'Clear',
};

export type FilterButtonBarProps = {
  /**
   * Additional content that you want to be shown on the left of the buttons.
   */
  children?: React.ReactNode;
  /**
   * Callback used for Filter button click. Should come from `BaseFilter`.
   */
  setFilter: () => void;
  /**
   * Callback used for Clear button click. Should come from `BaseFilter`.
   */
  clearFilter: () => void;
  /**
   * Localized strings used in buttons.
   */
  translatedLabels?: FilterButtonBarTranslation;
} & Omit<CommonProps, 'title'>;

/**
 * Button bar component that should be used in a filter. It already has Filter and Clear buttons.
 * @example
 * <FilterButtonBar setFilter={() => setFilter(text)} clearFilter={clearFilter} />
 */
export const FilterButtonBar = (props: FilterButtonBarProps) => {
  const {
    children,
    setFilter,
    clearFilter,
    translatedLabels,
    className,
    style,
    id,
  } = props;

  const translatedStrings = { ...defaultStrings, ...translatedLabels };

  useGlobals();

  return (
    <Box className={cx('iui-button-bar', className)} style={style} id={id}>
      {children}
      <Button styleType='high-visibility' onClick={setFilter}>
        {translatedStrings.filter}
      </Button>
      <Button onClick={clearFilter}>{translatedStrings.clear}</Button>
    </Box>
  );
};
