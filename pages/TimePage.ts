import { Page, Locator, expect } from '@playwright/test';

export class TimePage {
  private readonly page: Page;
  private readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#q');
  }

  async searchCity(city: string) {
    await this.searchInput.fill(city);
    await this.searchInput.press('Enter');
  }

  get cityResultLocator(): Locator {
    return this.page.locator('#msgdiv');
  }

  get dateDisplay(): Locator {
    return this.page.locator('#dd');
  }

  get timeDisplay(): Locator {
    return this.page.locator('#clock');
  }
}