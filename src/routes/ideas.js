const express = require('express')
const ideas= express.Router();
const {Ideas} = require('../db');




ideas
     .get("/",async(req,res)=>{
        const all=await Ideas.findAll();
        res.json(all);
     })
     .get("/:departamentID",)
     .post("/",async(req,res)=>{
        const data = req.body;

        const idea=await Ideas.create(data);

        res.status(201).json(idea);
     })
     .patch("/:departamentID")
     .delete("/:departamentID")

module.exports= ideas;