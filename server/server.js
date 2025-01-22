const express= require('express');
const cors = require('cors');
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017") // change the database url to your database url connection
.then(()=>{
    console.log('connected to database')
})
.catch(()=>{
    console.log("error while connecting to database");
})
const app=express();


app.listen(3001,()=>{
    console.log('Server is running...');
})