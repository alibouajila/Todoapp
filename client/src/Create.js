import React from 'react'
import './Create.css'
function Create() {
  return (
    <div className='add-task'>
        <h2>
            <p id='title'> ADD A TASK</p>
            <input placeholder='Enter a task'></input>
        <button id='btn'>ADD</button>
        </h2>
    </div>
  )
}

export default Create