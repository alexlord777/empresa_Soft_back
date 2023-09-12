import express  from "express";
const user= express.Router();



user
     .get("/",)
     .get("/:userID",)
     .post("/",)
     .patch("/:userID")
     .delete("/:userID")

export default user;