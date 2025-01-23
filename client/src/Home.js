import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios
      .get('http://localhost:3001')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => fetchTasks())
      .catch((err) => console.log(err));
  };

  const handleMarkAsDone = (id) => {
    axios
      .patch(`http://localhost:3001/update/${id}`, { isDone: true })
      .then(() => fetchTasks()) 
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="home">
      <h1 id='title'>My Tasks</h1>
      <Create onTaskAdded={fetchTasks} />
      <br />
      <div className="tasks">
        {tasks.length === 0 ? (
          <h2>No tasks!</h2>
        ) : (
          tasks.map((t) => (
            <div key={t._id} className={`task ${t.isDone ? 'done' : ''}`}>
              <span>{t.title}</span>
              <div className="actions">
                <button onClick={() => handleMarkAsDone(t._id)} title="Mark as Done">
                  ✅
                </button>
                <button onClick={() => handleDelete(t._id)} title="Delete">
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
