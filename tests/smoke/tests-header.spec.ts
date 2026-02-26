import { test, expect, Locator } from '@playwright/test';
import { LEO_LANGUAGE_URL} from '../../test-data/pg-data';
import { LOGO, HEADER_DROPDOWNS, DD_PROJECT, DD_EXAMPLES, DD_HELP, HEADER_BUTTONS, TESTNET_BTN, SHIELD_BTN } from '../../test-data/pg-data';
import { playground_full_open } from '../../helpers/pg_open';
import { Playground, PlaygroundHeader, Button } from '../../POM/playground';

test.describe('Playground Header', () => {

  test('Header dropdowns and Logo', async ({ page }) => {
    await playground_full_open(page);
    const playground = new Playground(page);

    const pg_header = new PlaygroundHeader(page);
    await pg_header.expectHeaderChildrenCount(4);
    await pg_header.expectHeaderVisibleChildrenCount(3);
    await pg_header.expectVisibleChildrenTags(['a', 'div', 'div']);
    
    await pg_header.expectLogo(LOGO);
    await pg_header.logo().click();
    await expect (page).toHaveURL(LEO_LANGUAGE_URL);
    await page.goBack();
    await playground.spinnerWait();

    await pg_header.expectDropdowns(HEADER_DROPDOWNS);

    await pg_header.expectDropdown(DD_PROJECT);

    await pg_header.expectDropdown(DD_EXAMPLES);

    await pg_header.expectDropdown(DD_HELP);
  });

  test('Header Buttons', async({page}) => {
    await playground_full_open(page);

    const count = await page.locator('.btn').filter({ visible: true }).count();
    expect(count).toBe(3);
    const header_buttons: Locator = page.locator('.btn').filter({ visible: true });
    await expect(header_buttons.nth(0)).toHaveText('testnet');
    await expect(header_buttons.nth(1)).toHaveText('Environment');
    await expect(header_buttons.nth(2)).toHaveText('Shield');
    
    /* **** Checking the tooltips of the header buttons  **** */
    const tooltip: Locator = page.locator('.custom-tooltip');
    const tooltip_count = await tooltip.count();
    expect(tooltip_count).toBe(1);
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveCSS('opacity', '0');
    for (let i = 0; i < HEADER_BUTTONS.length; i++) {
      const button = new Button(page, header_buttons.nth(i));
      await button.expectButtonName(HEADER_BUTTONS[i].name);
      await button.expectButtonTooltip(HEADER_BUTTONS[i].tooltip);
    }

    /* **** Checking the pseudo-elements of the "testnet" button  **** */
    const testnet_button = new Button(page, header_buttons.first());
    await testnet_button.expectBeforeExistsAndVisible();
    await testnet_button.expectBefore(TESTNET_BTN.before);
    await testnet_button.expectAfterNotExists();

    /* **** Checking the pseudo-elements of the "Environment" button  **** */
    const enironment_button = new Button( page, header_buttons.nth(1));
    await enironment_button.expectBeforeNotExists();
    await enironment_button.expectAfterNotExists();


    /* **** Checking the pseudo-elements of the "Shield" button  **** */
    const shield_button = new Button(page, header_buttons.last());
    await shield_button.expectBeforeNotExists();
    await shield_button.expectAfterExistsAndVisible();
    await shield_button.expectAfter(SHIELD_BTN.after);
  })

});



