/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
describe('Text', () => {
  const storyPath = 'Text';
  const tests = [
    'Basic',
    'Body',
    'Small',
    'Leading',
    'Subheading',
    'Title',
    'Headline',
    'Polymorphic',
    'Skeleton',
  ];

  tests.forEach((testName) => {
    it(testName, function () {
      const id = Cypress.storyId(storyPath, testName);
      cy.visit('/', { qs: { mode: 'preview', story: id } });
      cy.wait(500); // TODO: Investigate

      cy.compareSnapshot(testName);
    });
  });
});
