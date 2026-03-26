import { test, expect } from '../../fixtures/test.fixture';

test.describe('SeleniumHQ Organization API Tests', { tag: '@api' }, () => {
  test('Should fetch repositories successfully', async ({ repos }) => {
    expect(repos.length).toBeGreaterThan(0);
    console.log('Fetched Repositories:', repos.length);
  });

  test('Should calculate total open issues correctly', async ({ repos }) => {
    const totalOpenIssues = repos.reduce(
      (sum: number, repo: any) => sum + repo.open_issues_count,
      0
    );

    expect(totalOpenIssues).toBeGreaterThanOrEqual(0);
    console.log('Total Open Issues:', totalOpenIssues);
  });

  test('Should sort repositories by last updated date (descending)', async ({ repos }) => {
    const sorted = [...repos].sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );

    expect(new Date(sorted[0].updated_at).getTime())
      .toBeGreaterThanOrEqual(new Date(sorted[1].updated_at).getTime());
    console.log('Top Updated Repo:', sorted[0].name);

  });

  test('Should find repository with highest watchers', async ({ repos }) => {
    const mostWatched = repos.reduce((prev: any, current: any) =>
      prev.watchers_count > current.watchers_count ? prev : current
    );

    expect(mostWatched.watchers_count).toBeGreaterThanOrEqual(0);
    console.log('Most Watched Repo:', mostWatched.name);
  });
});