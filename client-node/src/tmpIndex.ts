#!/usr/bin/env node
import {fsPromise} from "@ztwx/cm-zip";
import program, { Command } from "commander";
import createTp from "./resources/createTp";

console.log(1)
program
    .command("vue <tpName>")
    .action(async(tpName:string)=>{
        await createTp(tpName);
    })

const result:Command=program.parse(process.argv);