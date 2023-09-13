const express = require('express');
const user= express.Router();
const {Users}= require('../db')



user.get("/",async(req,res)=>{
          try {
               const all=await Users.findAll();
               
               res.json(all);
          } catch (error) {
               res.status(404).send(error);
          }
     })

user.get("/:userID",(req,res)=>{

     })

user.post("/",async(req,res)=>{
          
               let {nombre,email,password,activo} = req.body;
               const Usuario= await Users.create({
                    nombre:nombre,
                    email:email,
                    password:password,
                    activo:activo
               }) 
               
               res.status(201).json(Usuario)
     })
user.patch("/:userID")
user.delete("/:userID")

module.exports=user;