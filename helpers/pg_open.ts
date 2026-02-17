import { expect, test, Page } from '@playwright/test';

export async function playground_open(page: Page) {
    test.setTimeout(60000);
    await page.goto('/');
    const spinner = page.locator('#cover-spinner');
    await expect(spinner).toBeVisible();
    await spinner.waitFor({ state: 'hidden'});
}