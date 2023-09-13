const express = require('express')
const home= express.Router();
const {Contenido}= require('../db');



home
     .get("/",async(req,res)=>{
        const all=await Contenido.findAll();
        res.json(all);
     })
     .get("/:departamentID",)
     .post("/",async(req,res)=>{
        const data= req.body;
        const conte=await Contenido.create(data);
        res.json(conte);
     })
     .patch("/:departamentID")
     .delete("/:departamentID")

module.exports= home;