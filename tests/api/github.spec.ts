import { test, expect } from '@playwright/test';
import { GitHubClient } from '../../api/GitHubClient';

test('Validate SeleniumHQ organization data', async ({ request }) => {
  const client = new GitHubClient(request);

  const repos = await test.step('Fetch repositories from SeleniumHQ org', async () => {
    const data = await client.getRepos('SeleniumHQ');
    expect(data.length).toBeGreaterThan(0);
    return data;
  });

  const totalOpenIssues = await test.step('Calculate total open issues across all repositories', async () => {
    const total = repos.reduce(
      (sum: number, repo: any) => sum + repo.open_issues_count,
      0
    );

    expect(total).toBeGreaterThanOrEqual(0);
    return total;
  });

  const sorted = await test.step('Sort repositories by last updated date (descending)', async () => {
    const sortedRepos = [...repos].sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );

    expect(new Date(sortedRepos[0].updated_at).getTime())
      .toBeGreaterThanOrEqual(new Date(sortedRepos[1].updated_at).getTime());

    return sortedRepos;
  });

  const mostWatched = await test.step('Find repository with highest watchers', async () => {
    const repo = repos.reduce((prev: any, current: any) =>
      prev.watchers_count > current.watchers_count ? prev : current
    );

    expect(repo.watchers_count).toBeGreaterThanOrEqual(0);
    return repo;
  });

  await test.step('Log summary results', async () => {
    console.log('Total Open Issues:', totalOpenIssues);
    console.log('Top Updated Repo:', sorted[0].name);
    console.log('Most Watched Repo:', mostWatched.name);
  });
});