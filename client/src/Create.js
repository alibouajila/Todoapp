import React, { useState } from 'react'
import axios from 'axios'
import './Create.css'
function Create() {
  const [task,setTask]=useState()
  const handleAdd=()=>  {
    axios.post('http://localhost:3001/add',{task:task}).then((res)=>{
      console.log("res")
    }).catch((err)=>{
      console.log("err")
    })

  }
  return (
    <div className='add-task'>
        <h2>
            <p id='title'> ADD A TASK</p>
            <input placeholder='Enter a task' onChange={(e)=>setTask(e.target.value)}></input>
        <button id='btn' onClick={handleAdd} type='button'>ADD</button>
        </h2>
    </div>
  )
}

export default Create