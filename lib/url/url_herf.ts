/**
 * It takes a string, and returns a string
 * @param {string} url - The URL to parse.
 * @returns A string.
 */
export default function url_href(url: string) {
  return new URL(url).href;
}