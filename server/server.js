const express= require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const  TaskModel=require ('./models/task.js');
mongoose.connect("mongodb://localhost:27017") // change the database url to your database url connection
.then(()=>{
    console.log('connected to database')
})
.catch(()=>{
    console.log("error while connecting to database");
})
const app=express();
app.use(cors())
app.use(express.json())
// add task route 
app.post("/add",(req,res)=>{
    const task=req.body.task
    TaskModel.create({
        title:task
    }).then((result)=>{
       res.json(result)
    }).catch((err)=>{res.json(err)})
})



app.listen(3001,()=>{
    console.log('Server is running...');
})