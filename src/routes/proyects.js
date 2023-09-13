const express = require('express')
const proy= express.Router();
const {Proyects}= require('../db')



proy
     .get("/",async(req,res)=>{
          const all=await Proyects.findAll();
          res.json(all);
     })

     .get("/:poyectID",)

     .post("/",async(req,res)=>{
          let data = req.body
          const proyect= await Proyects.create(data)

          res.status(201).json(proyect);
     })
     .patch("/:proyectID")
     .delete("/:proyectsID")

module.exports= proy;