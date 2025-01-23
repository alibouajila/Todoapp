const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const TaskModel = require('./models/task.js'); 

mongoose.connect("mongodb://localhost:27017/taskmanager")
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log("Error while connecting to database");
  });

const app = express();
app.use(cors());
app.use(express.json()); 

// Add task route
app.post("/add", (req, res) => {
  const task = req.body.task;
  TaskModel.create({
    title: task,
    isDone: false 
  })
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });
});

// Get all tasks route
app.get("/", (req, res) => {
  TaskModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

// Delete task route
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TaskModel.findByIdAndDelete(id)
    .then(() => res.json({ message: "Task deleted" }))
    .catch((err) => res.json(err));
});

// Update task route (mark as done)
app.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;
  TaskModel.findByIdAndUpdate(id, { isDone }, { new: true })
    .then(updatedTask => res.json(updatedTask))
    .catch(err => res.json(err));
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running ...');
});
