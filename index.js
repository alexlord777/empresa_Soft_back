import express from "express";

const app= express();

app.get('/',(res,req)=>{
    res.send("Mundndo ")
})

app.listen(3000,()=>{
    console.log("port 3000");
})