export default function url_pathname(url: string): string {
    return new URL(url).pathname;
}