export default function url_protocol(url: string): string {
    return new URL(url).protocol;
}