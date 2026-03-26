export function getCurrentDateByTimezone(
  locale: string,
  timeZone: string
): string {
  const now = new Date();

  return now.toLocaleDateString(locale, {
    timeZone,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export const cityTimezones: Record<string, string> = {
  'Los Angeles': 'America/Los_Angeles',
  'New York': 'America/New_York',
  London: 'Europe/London',
  Tokyo: 'Asia/Tokyo',
  Beijing: 'Asia/Shanghai',
  Sydney: 'Australia/Sydney',
};