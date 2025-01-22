import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';

function Create({ onTaskAdded }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (!task.trim()) return; 
    axios
      .post('http://localhost:3001/add', { task: task })
      .then(() => {
        setTask(''); 
        if (onTaskAdded) onTaskAdded(); 
      })
      .catch((err) => {
        console.error("Error while adding task:", err);
      });
  };

  return (
    <div className="create-task">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <button className="add-task-btn" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default Create;
