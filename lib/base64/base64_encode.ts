/**
 * Convert a string to base64.
 * @param {string} value - The string to be encoded.
 * @returns A string
 */
export default function base64_encode(value: string): string {
  return btoa(value);
}
