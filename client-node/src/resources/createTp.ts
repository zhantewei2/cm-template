import {fsPromise} from "@ztwx/cm-zip";
import Path from "path";
import fs from "fs";

export default async(tpName:string)=>{
    const currentPath=process.cwd();
    const vueTp:string=await fsPromise("readFile",Path.resolve(__dirname,"../../store/vue/template.vue"));
    const resultTp=vueTp.toString().replace(/\${name}/g,tpName);
    
    const targetDir=Path.resolve(currentPath,tpName);

    if(fs.existsSync(targetDir))return console.error(`${tpName} exists!`);

    await fsPromise("mkdir",targetDir);
    await fsPromise(
        "writeFile",
        Path.resolve(targetDir,`${tpName}.vue`),
        resultTp    
    )
    await fsPromise(
        "writeFile",
        Path.resolve(targetDir,`${tpName}.scss`),""
    )
    await fsPromise(
        "writeFile",
        Path.resolve(targetDir,`${tpName}.html`),
        `
        <main>
            ${tpName} content
        </main>
        `
    )


}