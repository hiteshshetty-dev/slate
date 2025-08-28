import { test, expect } from '@playwright/test'

test.describe('selection', () => {
  const slateEditor = '[data-slate-node="element"]'
  test.beforeEach(
    async ({ page }) =>
      await page.goto('http://localhost:3000/examples/richtext')
  )
  test('select the correct block when triple clicking', async ({ page }) => {
    // triple clicking the second block (paragraph) shouldn't highlight the
    // quote button
    for (let i = 0; i < 3; i++) {
      await page.locator(slateEditor).nth(1).click()
    }
    // Find the quote button by test-id and verify it's not active/highlighted
    const quoteButton = page.getByTestId('block-button-block-quote')
    await expect(quoteButton).toHaveCSS('color', 'rgb(204, 204, 204)')
  })
})
