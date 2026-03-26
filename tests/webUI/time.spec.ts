import { cityTimezones, getCurrentDateByTimezone } from '../../utils/date.util';
import { test, expect } from '../../fixtures/test.fixture';
import citiesData from '../../test-data/cities.json';

test.describe('Time.is', () => {
  test.describe.configure({ mode: 'default' });
  for (const city of citiesData.cities) {
    test(`Verify city, date and time of ${city}`, async ({ page, timePage }) => {
      await test.step('Open Time.is homepage', async () => {
        await page.goto('/', {
          waitUntil: 'domcontentloaded', // infinity loading by ads
        });
      });

      await test.step('Search for city', async () => {
        await timePage.searchCity(city);
      });

      await test.step('Verify city is displayed', async () => {
        await expect(timePage.cityResultLocator).toContainText(city, { timeout: 10000 });
      });

      await test.step('Verify date is correct', async () => {
        const timeZone = cityTimezones[city];

        const expectedDate = getCurrentDateByTimezone('en-US', timeZone);

        await expect(timePage.dateDisplay).toContainText(expectedDate);
      });

      await test.step('Verify time format and progression', async () => {
        // verify time format
        const time = await timePage.timeDisplay.textContent();
        expect(time).toMatch(/^\d{2}:\d{2}:\d{2}$/);

        // verify time progression
        const time1 = await timePage.timeDisplay.textContent();
        await page.waitForTimeout(2000);
        const time2 = await timePage.timeDisplay.textContent();

        expect(time1).not.toBeNull();
        expect(time2).not.toBeNull();
        expect(time2! > time1!).toBeTruthy();
      });
    });
  }
})