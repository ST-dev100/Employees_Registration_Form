const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const EmpR = require('./routers/EmpRouter')
require('dotenv').config();
const app = express();

mongoose.connect('mongodb://localhost/New').then(()=>{
    console.log("connected")
});
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('./public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/',EmpR)
app.listen(process.env.PORT,()=>{
    console.log("start server")
})
