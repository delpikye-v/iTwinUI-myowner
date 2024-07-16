import { test, expect, Page } from '@playwright/test';

test.describe('Breadcrumbs', () => {
  test(`should overflow whenever there is not enough space`, async ({
    page,
  }) => {
    await page.goto(`/Breadcrumbs`);

    const setContainerSize = getSetContainerSize(page);
    const expectOverflowState = getExpectOverflowState(page);

    await expectOverflowState({
      expectedItemLength: 5,
      expectedOverflowButtonVisibleCount: undefined,
    });

    await setContainerSize('200px');

    await expectOverflowState({
      expectedItemLength: 2,
      expectedOverflowButtonVisibleCount: 2,
    });

    // should restore hidden items when space is available again
    await setContainerSize(undefined);

    await expectOverflowState({
      expectedItemLength: 5,
      expectedOverflowButtonVisibleCount: undefined,
    });
  });

  test(`should at minimum always show one overflow tag and one item`, async ({
    page,
  }) => {
    await page.goto(`/Breadcrumbs`);

    const setContainerSize = getSetContainerSize(page);
    const expectOverflowState = getExpectOverflowState(page);

    await expectOverflowState({
      expectedItemLength: 5,
      expectedOverflowButtonVisibleCount: undefined,
    });

    await setContainerSize('10px');

    await expectOverflowState({
      expectedItemLength: 1,
      expectedOverflowButtonVisibleCount: 1,
    });
  });
});

// ----------------------------------------------------------------------------

const getSetContainerSize = (page: Page) => {
  return async (dimension: string | undefined) => {
    await page.getByTestId('container').evaluate(
      (element, args) => {
        if (args.dimension != null) {
          element.style.setProperty('width', args.dimension);
        } else {
          element.style.removeProperty('width');
        }
      },
      { dimension },
    );
    await page.waitForTimeout(30);
  };
};

const getExpectOverflowState = (page: Page) => {
  return async ({
    expectedItemLength,
    expectedOverflowButtonVisibleCount,
  }: {
    expectedItemLength: number;
    expectedOverflowButtonVisibleCount: number | undefined;
  }) => {
    const items = page.getByTestId('item');
    expect(items).toHaveCount(expectedItemLength);

    const overflowButton = page.locator('button');

    if (expectedOverflowButtonVisibleCount != null) {
      expect(await overflowButton.textContent()).toBe(
        `${expectedOverflowButtonVisibleCount}`,
      );
    } else {
      expect(overflowButton).toHaveCount(0);
    }
  };
};
