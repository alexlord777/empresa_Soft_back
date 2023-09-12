import express from "express";
import router1 from "./src/routes/routes.js";

const app= express();

app.use('/',router1);
app.use(express.json());

app.listen(3000,()=>{
    console.log("port 3000");
})