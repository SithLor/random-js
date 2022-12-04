export default function url_password(url: string) {
  return new URL(url).password;
}