import React from 'react'
import './Todo.css'
import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

function Todocards({ title, body,id ,delid, display}) {
  return (
    <div className='todocards'>
      <div>
        <h6>{title}</h6>
        <p className='todo-crad-p'>
          {body.split("", 27)}...
        </p>
        <div>
          <div className='icons' >
            <div className='update d-flex ' onClick={(display)=>{
              display("block");

            }}
            >
              {/* <MdOutlineSecurityUpdateGood className='crd' />
            <p>Update</p> */}
</div>
            
            
            <div onClick={()=>{
              delid(id)
            }} className='dlete d-flex'>
            <MdDelete  className='crd del' />
            <p>Delete</p>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Todocards
