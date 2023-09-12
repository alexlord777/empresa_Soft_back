import express  from "express";
const home= express.Router();



home
     .get("/",(req,res)=>{
        res.send("hola mundo");
     })
     .get("/:departamentID",)
     .post("/",)
     .patch("/:departamentID")
     .delete("/:departamentID")

export default home;