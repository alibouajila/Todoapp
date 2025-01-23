const mongoose =require("mongoose");
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isDone: { type: Boolean, default: false } 
  });
const TaskModel=mongoose.model("task",taskSchema)
module.exports=TaskModel