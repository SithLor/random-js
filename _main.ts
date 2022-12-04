import url_host from "./url_host.ts";
import url_hostname from "./url_hostname.ts";
import url_origin from "./url_origin.ts";
import url_password from "./url_password.ts";
import url_pathname from "./url_pathname.ts";
import url_port from "./url_port.ts";
import url_protocol from "./url_protocol.ts";
import url_search from "./url_search.ts";
import base64_decode from "./base64_decode.ts";
import base64_encode from "./base64_encode.ts";
import proc_gid from "./proc_gid.ts";
import proc_pid from "./proc_pid.ts";
import proc_ppid from "./proc_ppid.ts";
import proc_uid from "./proc_uid.ts";
import dir_chdir from "./dir_chdir.ts";
import dir_cwd from "./dir_cwd.ts";
import dir_execPath from "./dir_execPath.ts";
import dir_mainfile from "./dir_mainfile.ts";
import log_error from "./log_error.ts";
import log_log from "./log_log.ts";
import log_warn from "./log_warn.ts";

import _url from "./_URL.ts";
import _base64 from "./_base64.ts";
import _proc from "./_proc.ts";
import _dir from "./_dir.ts";

export const url = new _url()
export const base64 = new _base64()
export const proc = new _proc()
export const dir = new _dir()