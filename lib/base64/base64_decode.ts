/**
 * Decode a base64 encoded string.
 * @param {string} value - The string to be decoded.
 * @returns The decoded string.
 */
export default function base64_decode(value: string): string {
  return atob(value);
}
