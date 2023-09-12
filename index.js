import express from "express";

const app= express();

app.get('/',(res,req)=>{
    req.send("hola")
})

app.listen(3000,()=>{
    console.log("port 3000");
})