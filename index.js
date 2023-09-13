const express = require('express')
const router1 = require('./src/routes/routes');
const {conn}= require('./src/db')
require('dotenv').config();


const app= express();
const PORT= 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/',router1);




conn.sync({ force:false }).then(() => {
    app.listen(PORT,()=>{
        console.log(`Server listen on port ${PORT}`);
    });
  });