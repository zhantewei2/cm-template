import { Readable } from "stream";

const request=require("request");
const baseHeaders={};


export const post=<T> (uri:string,body:any=""):Promise<{res:any,body:T}>=>
    new Promise((resolve,reject)=>{
        request({
            method:"POST",
            uri,
            headers:{"Content-Type":"application/json",...baseHeaders},
            body:JSON.stringify(body),
            callback:(err:any,res:any,body:T)=>{
                if(err)return reject(body);
                return resolve({res,body});
            }
        })
})
export const postStream=(uri:string,body:any=""):Readable=>{
    const req:Readable= request({
        method:"POST",
        uri,
        headers:baseHeaders,
        body:JSON.stringify(body)
    })
    return req;
}


export const get=():Promise<any>=>new Promise((resolve,reject)=>{

})
