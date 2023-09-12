import  express  from "express";
import dep from "./departament.js"
import home from "./home.js";
import proy from "./proyects.js";
import user from "./users.js";

const router= express.Router();

router.use('/',home)
router.use('/departament',dep);
router.use('/proyects',proy);
router.use('/users',user);

export default router;