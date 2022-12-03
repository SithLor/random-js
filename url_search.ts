export default function url_search(url: string): string {
    return new URL(url).search;
}