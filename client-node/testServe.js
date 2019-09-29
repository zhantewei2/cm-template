const http=require("http");

const app=http.createServer((req,res)=>{
    req.on("data",chunk=>console.log(chunk))
    res.end("end")
}).listen(3000);