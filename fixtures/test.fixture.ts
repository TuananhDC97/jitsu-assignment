import { test as base, request } from '@playwright/test';
import { TimePage } from '../pages/timePage';
import { GitHubClient } from 'api/githubClient';

type MyFixtures = {
  storageStatePath?: string;
  timePage: TimePage;
  repos: any[];
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

  repos: async ({ request }, use) => {
    const client = new GitHubClient(request);
    const data = await client.getRepos('SeleniumHQ');
    await use(data);
  },
});

export { expect } from '@playwright/test';