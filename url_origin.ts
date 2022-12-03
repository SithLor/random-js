/**
 * It takes a URL string and returns the origin of that URL
 * @param {string} url - The URL to parse.
 * @returns The origin of the URL.
 */
export default function url_origin(url: string) {
  return new URL(url).origin;
}
