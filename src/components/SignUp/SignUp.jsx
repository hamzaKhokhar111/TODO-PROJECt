import React, { useState } from 'react'
import './Signup.css'
import Headingcom from './Headingcom'
// import axios from 'axios'
// import { response } from 'express';

function SignUp() {
    const [inputs, setinputs]= useState({
        email:"",
        username:"",
        passward:"",
    });
    const change = (e)=>{
        const {name, value}= e.target;  
        setinputs({...inputs, [name]: value })

    }
    
     
      
    const submit =async (e)=>{
    
            console.log(inputs);
            let result=await fetch('http://localhost:5000',{
                method:'POST',
                body: JSON.stringify({inputs}),
                Headers:{
                  'content-type':'application/json'
                },
              })
            setinputs({
                email:"",
                username:"",
                passward:"",
            });

            result=await result.json();
            console.log(result)
    
        
       
        
    };
    return (
        <div className='signup'>
            <div className="container">
                <div className="row">

                   

                    <div className="coloum  col-lg 4 h-200vh d-flex justify-content-center align-items-center " style={{ height: "150 vh" }}>
                        <Headingcom first="Sign"  second="Up" />

                    </div>

                    <div className="coloum  col-lg 8 h-100  col-lg 4 h-200vh coloum  col-lg 4 h-200vh justify-content-center align-items-center " >
                        <div className='inputs'>
                            <input value={inputs.email} onChange={change} className='p-2' type='email' name='email' placeholder='enter you email' />
                            <input value={inputs.username} onChange={change} className='p-2' type='username' name='username' placeholder='enter you user Name'  />
                            <input value={inputs.passward} onChange={change} className='p-2' type='password' name='passward' placeholder='enter you passward' />
                            <button onClick={submit} className='btn'>Signup</button>
                            </div>
                    </div>
            

                </div>
            </div>

        </div>
    )
}

export default SignUp
