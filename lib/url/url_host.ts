/**
 * It takes a URL string and returns the hostname
 * @param {string} url - string
 * @returns The host of the URL.
 */

export default function url_host(url: string): string {
  return new URL(url).host;
}
