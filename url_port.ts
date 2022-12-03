export default function url_port(url: string): string {
    return new URL(url).port;
}