import proc_gid from "./proc_gid.ts";
import proc_hostname from "./proc_hostname.ts";
import proc_pid from "./proc_pid.ts";
import proc_ppid from "./proc_ppid.ts";
import proc_uid from "./proc_uid.ts";

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