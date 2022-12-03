import log_error from "./log_error.ts";
import log_log from "./log_log.ts";
import log_warn from "./log_warn.ts";

export default  class _log{
    log(value:any){
        log_log(value)
    }
    error(value:any){
        log_error(value)
    }
    warn(value:any){
        log_warn(value)
    }
} 