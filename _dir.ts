import dir_chdir from "./dir_chdir.ts";
import dir_cwd from "./dir_cwd.ts";
import dir_execPath from "./dir_execPath.ts";
import dir_mainfile from "./dir_mainfile.ts";


export default class _dir{
    mainfile(){
        dir_mainfile()
    }
    chdir(directory: string | URL):void{
        dir_chdir(directory)
    }
    execPath(){
        dir_execPath()
    }
    cwd(){
        dir_cwd()
    }
}