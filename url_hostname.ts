/**
 * It returns the hostname of the given URL.
 * @param {string} url - The URL to get the hostname from.
 * @returns The hostname of the URL.
 */
export default function url_hostname(url: string): string {
  return new URL(url).hostname;
}