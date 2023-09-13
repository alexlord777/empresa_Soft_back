const express = require('express')
const home= express.Router();
const {Tasks}= require('../db');


home
     .get("/",async(req,res)=>{
        const all= Tasks.findAll();
        res.json(all);
     })
     .get("/:departamentID",)
     .post("/",async(req,res)=>{
        const data= req.body;
        const task=await Tasks.create(data);
        res.json(task);
     })
     .patch("/:departamentID")
     .delete("/:departamentID")

module.exports= home;