import { APIRequestContext, expect } from '@playwright/test';

export class GitHubClient {
  constructor(private request: APIRequestContext) {}

  async getRepos(org: string) {
    const response = await this.request.get(
      `https://api.github.com/orgs/${org}/repos?per_page=100`
    );

    expect(response.ok()).toBeTruthy();

    return await response.json();
  }
}