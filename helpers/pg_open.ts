import { expect, test, Page } from '@playwright/test';
import { ModalWin } from '../POM/privacy_terms';
import { Playground } from '../POM/playground';

export async function playground_open(page: Page) {
    test.setTimeout(60000);
    await page.goto('/');
    const pg = new Playground(page);
    await pg.spinnerWait();
}

export async function playground_full_open(page: Page) {
    test.setTimeout(60000);
    await page.goto('/');
    const pg = new Playground(page);
    await pg.spinnerWait();

    const modalWin = new ModalWin(page);
    await expect(modalWin.acceptButton).toHaveText('Accept');
    await modalWin.acceptButton.click();
    await expect(modalWin.cancelButton).toHaveText('Skip');
    await modalWin.cancelButton.click();
}

export async function onboarding_open(page: Page) {
    test.setTimeout(60000);
    await page.goto('/');
    const pg = new Playground(page);
    await pg.spinnerWait();

    const modalWin = new ModalWin(page);
    await expect(modalWin.acceptButton).toHaveText('Accept');
    await modalWin.acceptButton.click();
    await expect(modalWin.acceptButton).toHaveText('Learn More');
    await modalWin.acceptButton.click();
}

