export default function dir_chdir(directory: string | URL):void{
    Deno.chdir(directory)
}