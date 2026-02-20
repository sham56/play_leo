import { Locator, Page, expect } from '@playwright/test';

export class Terminal {
    readonly terminal: Locator;
    readonly content: Locator;
    readonly rows: Locator;
    readonly resizer: Locator;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.terminal = page.locator('#terminal').filter({ visible: true });
        this.content = this.terminal.locator('.xterm-rows');
        this.rows = this.content.locator('> *');
        this.resizer = page.locator('.terminal-resizer');
    }

    async setFocus() {
        await this.content.click();
    }

    async expectTerminalOutput(expected: string) {
        await expect(this.content).toContainText('Output');
        await expect(this.content).toContainText(expected);
    }

    async waitForExecution() {
        await expect(this.rows.last()).toHaveText('$  ', { timeout: 10000 });
    }


    async resize() {
        const box = await this.resizer.boundingBox();
        if (!box) throw new Error('Element not found');
        const startX = box.x + box.width/2;
        const startY = box.y + box.height/2;

        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();
        await this.page.mouse.move(startX, startY - 255, { steps: 10 });
        await this.page.mouse.up();
    }
}