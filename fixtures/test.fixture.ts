import { test as base, request } from '@playwright/test';
import { TimePage } from '../pages/TimePage';

type MyFixtures = {
  storageStatePath?: string;
  timePage: TimePage;
};

export const test = base.extend<MyFixtures>({
  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },

  timePage: async ({ page }, use) => {
    const timePage = new TimePage(page);
    await use(timePage);
  },
});

export { expect } from '@playwright/test';