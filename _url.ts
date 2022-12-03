import url_host from "./url_host.ts";
import url_hostname from "./url_hostname.ts";
import url_origin from "./url_origin.ts";
import url_password from "./url_password.ts";
import url_pathname from "./url_pathname.ts";
import url_port from "./url_port.ts";
import url_protocol from "./url_protocol.ts";
import url_search from "./url_search.ts";

export default class _url{
    /**
 * It takes a URL string and returns the hostname
 * @param {string} url - string
 * @returns The host of the URL.
 */
    Get_host(url:string) {
        url_host(url)
    }

/**
 * It takes a url as a string, and returns the hostname of the url.
 * @param {string} url - The URL you want to get the hostname from.
 */
    Get_hostname(url:string){
        url_hostname(url)
    }
    Get_origin(url:string){
        url_origin(url)
    }
    Get_password(url:string){
        url_password(url)
    }
    Get_pathname(url:string){
        url_pathname(url)
    }
    Get_port(url:string){
        url_port(url)
    }
    Get_search(url:string){
        url_search(url)
    }
    Get_protocol(url:string){
        url_protocol(url)
    }
}
