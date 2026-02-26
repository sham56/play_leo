import { Locator, Page, expect } from '@playwright/test';

export class Playground {
    readonly page: Page;
    readonly url: string;
    readonly title: string = 'Leo Playground';
    readonly spinner: Locator;
    readonly header: Locator;
    readonly footer: Locator;
    readonly grid_area: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.url = 'https://stage-pg.leo-lang.org';
        this.header = this.page.locator('#header-container'); 
        this.grid_area = this.page.locator('#grid-container'); 
        this.footer = this.page.locator('#footer-container'); 
        this.spinner = this.page.locator('#cover-spinner');
    }    
    
    async spinnerWait() {
        await expect(this.spinner).toBeVisible();
        await this.spinner.waitFor({ state: 'hidden'});
    }
}

export class PlaygroundHeader {
  readonly page: Page
  readonly header: Locator;
  //readonly logo: Locator;
  readonly title: Locator;
  readonly linkDocumentation: Locator;
  readonly headerVisibleChildren: Locator;
  readonly headerChildren: Locator;

  constructor(page: Page) {
    this.header = page.locator('#header-container');
    this.page = page;
    //this.logo = page.locator('#header-logo');   
    this.headerVisibleChildren = this.header.locator('> *').filter({ visible: true });
    this.headerChildren = this.header.locator('> *');
    this.title = page.locator('.header-title');
    this.linkDocumentation = page.locator('.header-documentation');
  }

  /** Locator: Усі direct children хедера */
  children(): Locator {
    return this.header.locator('> *');
  }

  logo(): Locator {
    return this.header.locator('> a');
  }

  /** Locator: ТІЛЬКИ видимі direct children хедера */
  visibleChildren(): Locator {
    return this.children().filter({ visible: true });
  }

  /** Locator: Перший видимий direct child */
  firstVisibleChild(): Locator {
    return this.visibleChildren().first();
  }

  /** Locator: Другий видимий direct child */
  nav_Wrapper(): Locator {
    return this.visibleChildren().nth(1);
  }

  /** Locator: Третій видимий direct child */
  thirdVisibleChild(): Locator {
    return this.visibleChildren().nth(2);
  }

  /** Locator: Dropdown buttons */
  dd_Buttons(): Locator {
    return this.header.locator('.dropdown-button').filter({visible: true});
  }
  dd_Content(): Locator {
    return this.header.locator('.dropdown-content').filter({visible: true});
  }

      /** Assert: count of visible header children */
  async expectHeaderChildrenCount(expected: number) {
    await expect(this.children()).toHaveCount(expected);
  }

      /** Assert: count of visible header children */
  async expectHeaderVisibleChildrenCount(expected: number) {
    await expect(this.visibleChildren()).toHaveCount(expected);
  }

    /** Assert: tegs видимих елементів */
  async expectVisibleChildrenTags(expectedTags: string[]) {
      const visibleChildren = this.visibleChildren();
      const count = await visibleChildren.count();
      expect(count).toBe(expectedTags.length);
      for (let i = 0; i < count; i++) {
          const child = visibleChildren.nth(i);
          const tagName = await child.evaluate((el) => el.tagName.toLowerCase());
          expect(tagName).toBe(expectedTags[i].toLowerCase());
      }
  }

  /** Assert: Logo */
  async expectLogo( expectedLogo: {
    href: string,
    alt: string,
    src: string, })  
  {
    await expect(this.logo()).toBeVisible();
    await expect(this.logo()).toHaveAttribute('href', expectedLogo.href);
    const img = this.logo().locator('img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('alt', expectedLogo.alt);
    await expect(img).toHaveAttribute('src', expectedLogo.src);
  }

 
  /** Assert: Dropdowns */
  async expectDropdowns(expected_dropdowns: string[]) {
    const navWrapper = this.nav_Wrapper();
    const dropdowns_text = await navWrapper.evaluate(el =>
      (
        (el as HTMLElement).innerText
      )
    );
    expect(dropdowns_text).toBe(expected_dropdowns.join('\n'));

    const dropdowns = navWrapper.locator('.dropdown').filter({ visible: true });
    await expect(dropdowns).toHaveCount(expected_dropdowns.length);
    for (let i = 0; i < expected_dropdowns.length; i++) {
      const dropdown = dropdowns.nth(i);
      const dropdownText = await dropdown.evaluate(el =>
        (el as HTMLElement).innerText.trim()
      );
      expect(dropdownText).toBe(expected_dropdowns[i]);
    }
  }

  async expectDropdown(expectedDropdown: {button: string, items: string[]}) {

      const ddButton = this.dd_Buttons().filter({hasText: expectedDropdown.button});
      await expect(ddButton).toHaveText(expectedDropdown.button);
      
      const ddContent = this.dd_Content();
      let ddItems = ddContent.locator('> *');

      await expect(ddContent).toHaveCount(0);
      await expect(ddContent).not.toBeVisible();
      await expect(ddItems).not.toBeVisible();
      await expect(ddItems).toHaveCount(0);

      await expect(ddButton).toHaveCount(1);
      await ddButton.hover();
      await expect(ddContent).toHaveCount(1);
      await expect(ddContent).toBeVisible();
      await expect(ddItems).toHaveCount(expectedDropdown.items.length);
      for (let i = 0; i < expectedDropdown.items.length; i++) {
        await expect(ddItems.nth(i)).toBeVisible();
        const itemText = await ddItems.nth(i).evaluate(el =>
          (el as HTMLElement).innerText.trim()
        );
        expect(itemText).toBe(expectedDropdown.items[i]);
      }

      await this.logo().hover();
      await expect(ddContent).toHaveCount(1);
      await expect(ddContent).toBeVisible();
      for (let i = 0; i < expectedDropdown.items.length; i++) {
        await expect(ddItems.nth(i)).toBeVisible();
        const itemText = await ddItems.nth(i).evaluate(el =>
          (el as HTMLElement).innerText.trim()
        );
        expect(itemText).toBe(expectedDropdown.items[i]);
      }

      await ddButton.hover();
      await expect(ddContent).toHaveCount(0);
      await expect(ddContent).not.toBeVisible();
      await expect(ddItems).not.toBeVisible();
  }
} 

export class Button  {
  readonly page: Page;
  readonly button: Locator;
  readonly tooltip: Locator;
  
  constructor(page: Page, button: Locator) {
    this.page = page;
    this.button = button;
    this.tooltip = page.locator('.custom-tooltip');
  }

  async expectButtonName(expected_name: string) {
    await expect(this.button).toHaveCount(1);
    await expect(this.button).toBeVisible();
    await expect(this.button).toHaveText(expected_name);
  }

  async expectButtonTooltip(expected_tooltip: string) {
      const tooltip = this.tooltip;
      await expect(tooltip).toHaveCSS('opacity', '0');  

      await this.button.hover();
      await expect(tooltip).toHaveCSS('opacity', '1');
      await expect(tooltip).toBeVisible();
      await expect(tooltip).toHaveText(expected_tooltip);
      const text = await tooltip.innerText();
      expect(text).toBe(expected_tooltip);

      await this.page.mouse.move(0, 0);
      await expect(tooltip).toHaveCSS('opacity', '0');  
  }

  async expectBeforeExistsAndVisible() {
    const existsAndVisible = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::before');
      return  s.content !== 'none' &&
              s.visibility !== 'hidden' &&
              s.opacity !== '0';
    })
    expect(existsAndVisible).toBe(true);
  }
  async expectAfterExistsAndVisible() {
    const existsAndVisible = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::after');
      return  s.content !== 'none' &&
              s.visibility !== 'hidden' &&
              s.opacity !== '0';
    })
    expect(existsAndVisible).toBe(true);
  }

  async expectBeforeNotExists() {
    const content = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::before');
      return s.content;
    });
    expect(content).toBe('none');
  }

  async expectAfterNotExists() {
    const content = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::after');
      return s.content;
    });
    expect(content).toBe('none');
  }
  
  async expectBeforeIndicatorVisible() {
    const styles = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::before');
      return s;
    });

    console.log(`::before content     : ${styles.content}`);
  }  

  async expectAfterIndicatorVisible() {
    const styles = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::after');
      return {
        content: s.content,
        fontFamily: s.fontFamily,
        opacity: s.opacity,
        display: s.display,
        bg: s.backgroundColor,
        width: s.width,
        height: s.height,
        borderRadius: s.borderRadius,
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        marginRight: s.marginRight,      };
    });

    console.log(`::after content     : ${styles.content}`);
  }  

  async expectBefore( expected: Partial<CSSStyleDeclaration>) {
    let styles = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::before');
      return s;
    }); 

    for (const [key, value] of Object.entries(expected)) {
        if (key === 'content' && styles.fontFamily === 'codicon') {
          const char = (styles as any)[key].replace(/"/g, '');
          const actualHex = char.codePointAt(0)?.toString(16);
          //console.log(`${key}: ${actualHex} => ${value}`); 
          expect(actualHex).toBe(value?.toString().toLowerCase());
        } else {
          //console.log(`${key}: ${(styles as any)[key]} => ${value}`); 
          expect((styles as any)[key]).toBe(value);
        }
      }
  }

  async expectAfter( expected: Partial<CSSStyleDeclaration>) {
    const styles = await this.button.evaluate(el => {
      const s = getComputedStyle(el, '::after');
      return s;
    }); 
        
    for (const [key, value] of Object.entries(expected)) {
        if (key === 'content' && styles.fontFamily === 'codicon') {
          const char = (styles as any)[key].replace(/"/g, '');
          const actualHex = char.codePointAt(0)?.toString(16);
          expect(actualHex).toBe(value?.toString().toLowerCase());
        } else {
          //console.log(`${key}: ${(styles as any)[key]} => ${value}`); 
          expect((styles as any)[key]).toBe(value);
        }
      }
  }
}
