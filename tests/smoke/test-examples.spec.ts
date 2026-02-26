import { expect, test } from '@playwright/test';
import { playground_full_open } from '../../helpers/pg_open';
import { ModalWin } from '../../POM/privacy_terms';
import { ExamplesDropdown } from '../../POM/dropdowns';
import { Terminal } from '../../POM/terminal';
import { examples } from '../../test-data/examples-data/examples';

test.describe('Examples test', () => {
    test('Examples', async ({ page }) => {
        await playground_full_open(page);
        for (const [key, example] of Object.entries(examples)) {
            
            const examplesDropdown = new ExamplesDropdown(page);
            await examplesDropdown.title.hover();
            await examplesDropdown.itemClick(example.name);
            const loadExample = new ModalWin(page);
            await loadExample.acceptButton.click();    
            
            const terminal = new Terminal(page);
            await expect(terminal.rows.first()).toHaveText(`$ ${example.input}`);
            await terminal.setFocus();
            await terminal.content.press('Enter');
            await terminal.waitForExecution();
            await terminal.resize();
            await terminal.expectTerminalOutput(example.output);
            console.log(`${example.name} test is correct`);
        }

    });
});