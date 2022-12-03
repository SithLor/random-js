//@use JSDoc
import base64_decode from "./base64_decode.ts";
import base64_encode from "./base64_encode.ts";


export default class _base64 {

/**  A function that takes a string and returns a base64 encoded string. 
 * @param {string} value1 - The string to be decoded.    
*/
    encode(value1:string ){
        base64_encode(value1)
    }
/**
 * It takes a  base64 encode string, and  decode base64 string than returns plain string.
 * @param {string} value1 - The string to be decoded.
 */
    decode(value1:string ){
        base64_decode(value1)
    }
}

