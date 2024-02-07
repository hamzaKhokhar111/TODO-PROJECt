import React from 'react'
import './Home.css'
import Todo from '../todo/Todo'
function Home() {
  
  return (
    <div className='home d-flex justify-content-center align-item-center'>
        <div className="container">
            <h1>Organize your <br /> work and life finally</h1>
            <p>Become focused,organized, and calm with <br />todo app. The world's #1 task manager app. </p>
            <button  className='home-btn btn '>Make Todo List</button>
             </div>
      
    </div>
  )
}

export default Home
