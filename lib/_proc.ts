import proc_gid from "./proc/proc_gid.ts";
import proc_hostname from "./proc/proc_hostname.ts";
import proc_pid from "./proc/proc_pid.ts";
import proc_ppid from "./proc/proc_ppid.ts";
import proc_uid from "./proc/proc_uid.ts";

export default class _proc {
    pid(){
        proc_pid()
    }
    ppid(){
        proc_ppid()
    }
    gid(){
        proc_gid()
    }
    uid(){
        proc_uid()
    }
    hostname(){
        proc_hostname()
    }
}