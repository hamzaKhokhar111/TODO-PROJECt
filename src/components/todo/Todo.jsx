import React, { useState } from 'react'
import './Todo.css'
import Todocards from './Todocards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
function Todo() {
    const [inputs,setinputs]=useState({title:"",body:""})
    const [Array, setArray]=useState([])
    const submit=()=>{
        if (inputs.title ==="" || inputs.body ==="") {

            toast.error("Title or body shold Not be empty");
        }
        else{
            setArray([...Array,inputs]);  
            setinputs({title:"",body:""});
            toast.success("Your Task Is Addede");
          
        }
       
    }
    const show= ()=>{
        document.getElementById('texterea').style.display="block";
    };
    const del = (id)=>{
        
        Array.splice(id, "1");
        setArray([...Array]);

    }

    const dis =(value)=>{
        console.log(value);
        document.getElementById("todo-update").style.display ="block";
    };
   
      
            
    const change = (e)=>{
        const {name,value} =e.target;
        setinputs({...inputs,[name]:value});

    };
     
  return (
    <>
    <div className='todo'>
        <ToastContainer/>
        <div className="todo-main container d-flex justify-content-center align-items-center my-4">
            <div className='d-flex flex-colomn  todo-inputs-div w-50' >
            <input onChange={change} name='title' value={inputs.title} onClick={show} type="text" placeholder='TITLE' className='p-2 my-2 todo-inputs' />
            <textarea 
            onChange={change} name='body' value={inputs.body}  id='texterea' type="text" placeholder='Body' className='p-2 todo-inputs '/>
            <button onClick={submit} className='btn'>Add</button>
            </div>
            
        </div>
    <div className="todo-body">
        <div className="container-fluid">
            <div className="row">
            {Array && 
             Array.map((item,index) =>(
                <>  
                {/* <div className="col-lg-3 bg-success mx-5 my-2"></div> */}
                <Todocards title={item.title} body={item.body  } id={index} delid={del} display={dis} />
                
                </>
                
                
            
             ))
             }
                </div>
          
        </div>
    </div>
    
      
    </div>
    {/* <div className="todo-update" id='todo-update'>
        <div className="container update">
        <Update/> 
             </div>
        
    </div> */}
    
    </>
  )
}

export default Todo
