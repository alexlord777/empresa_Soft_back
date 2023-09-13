const express = require('express')
const inves= express.Router();
const {Investigaciones}= require('../db');



inves
     .get("/",async(req,res)=>{
        const all=await Investigaciones.findAll();
        res.json(all);
     })
     .get("/:departamentID",)
     .post("/",async(req,res)=>{
         const data= req.body;
         const inves= await Investigaciones.create(data);
         res.status(200).json(inves);
     })
     .patch("/:departamentID")
     .delete("/:departamentID")

module.exports= inves;