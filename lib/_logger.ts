import log_error from "./logger/logger_error.ts";
import log_log from "./logger/logger_log.ts";
import log_warn from "./logger/logger_warn.ts";

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