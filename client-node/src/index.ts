#!/usr/bin/env node
import {zip,unzip} from "@ztwx/cm-zip";
import "./setting";
import Path from "path";
import {Repository} from  "./repository/Repository";
import {post,postStream} from "./request";
import { Readable } from "stream";

const repository:Repository=new Repository();

repository.initRepository();

const is:Readable=postStream("http://localhost:3000",{a:1});

is.on("data",chunk=>{
    console.log(chunk)
})