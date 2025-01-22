const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const TaskModel = require('./models/task.js');

mongoose.connect("mongodb://localhost:27017") // Change the database URL to your database URL connection
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
        completed: false // Default value for a new task
    }).then((result) => {
        res.json(result);
    }).catch((err) => { res.json(err); });
});

// Get tasks route
app.get("/", (req, res) => {
    TaskModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Delete task route
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    TaskModel.findByIdAndDelete(id)
        .then(() => res.json({ message: "Task deleted successfully" }))
        .catch(err => res.json(err));
});

// Mark task as done route
app.put("/done/:id", (req, res) => {
    const { id } = req.params;
    TaskModel.findByIdAndUpdate(id, { completed: true }, { new: true })
        .then(updatedTask => res.json(updatedTask))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log('Server is running...');
});
