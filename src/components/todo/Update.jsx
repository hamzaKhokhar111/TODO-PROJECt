import React from 'react'
import './Todo.css'
function Update({display}) {

  return (
    <div id='mylife' className='p-5  d-flex justify-content-center align-items-start flex-column update  mylife bg-primary'>
      <h3>Update your Task</h3>
      <input type="text" className='todo-inputs my-4 w-100 p-3 ' />
      <textarea className='todo-inputs w-100 p-3' name="" id="" cols="30" rows="10"></textarea>
      {/* <button onClick={display} className='btn btn-dark my-4'>UPDATE</button> */}
      <button onClick={()=>display("none")} className='btn btn-danger my-4 mx-3'> Close</button>

    </div>
  )
}

export default Update
