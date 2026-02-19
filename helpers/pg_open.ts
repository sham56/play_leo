import { expect, test, Page } from '@playwright/test';
import { PrivacyTermsModal, PrivecyTermsPages } from '../../POM/privacy_terms';

export async function playground_open(page: Page) {
    test.setTimeout(60000);
    await page.goto('/');
    const spinner = page.locator('#cover-spinner');
    await expect(spinner).toBeVisible();
    await spinner.waitFor({ state: 'hidden'});
}

export async function playground_open_no_wait(page: Page) {
    test.setTimeout(60000);
    await page.goto('/');
    const spinner = page.locator('#cover-spinner');
    await expect(spinner).toBeVisible();
    await spinner.waitFor({ state: 'hidden'});
    
    mo
}