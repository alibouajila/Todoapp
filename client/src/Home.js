import React from 'react'
import Create from './Create'
import './Home.css'
function Home() {
  return (
    <div className='home'>
        <h1>My List</h1>
        <Create/>
        <div className='tasks'>

        </div>
    </div>
  )
}

export default Home