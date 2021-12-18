const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
require('./db/conn');
const cookieParser = require('cookie-parser');
const path = require('path');

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(require('./router/router'));



app.get('/about',(req,res)=>{
    res.send('hello world about page');
});

app.get('/login',(req,res)=>{
    // res.cookie("newcookie","data");
    res.send('hello world signin page');
});

app.get('/signup',(req,res)=>{
    res.send('hello world signup page');
});






app.listen(PORT);