const express = require('express');

const router= express.Router();

const home= require('./home');
const dep= require('./departament');
const proy= require('./proyects');
const user= require('./users');
const ideas= require('./ideas'); 
const investigaciones=require('./invesigaciones');
const constenido= require('./contenido')
const tasks= require('./tasks');

router.use('/',home)
router.use('/departament',dep);
router.use('/proyects',proy);
router.use('/users',user);
router.use('/ideas',ideas);
router.use('/investigaciones',investigaciones)
router.use('/contenido',constenido);
router.use('/tasks',tasks);

module.exports= router;