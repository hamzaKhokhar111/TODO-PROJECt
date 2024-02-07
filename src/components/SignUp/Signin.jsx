import React, { useState } from 'react'
import './Signup.css'
import Headingcom from './Headingcom'


function Signin() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    async function conect(){
        // console.log(name,email)
        // let result= await fetch('http://localhost:5000',{
        //     method:"post",
        //     body:JSON.stringify({email}),
        //     headers:{
        //         'content-type':'application.json'

        //     }
        // });
        // result=await result.json();
        // console.log(result)
        // setemail("")
        // setname("")
    }
  return (
    <div>
       <div className='signup'>
            <div className="container">
                <div className="row">

                    <div className="coloum  col-lg 8 h-100  col-lg 4 h-200vh coloum  col-lg 4 h-200vh justify-content-center align-items-center " >
                        <div className='inputs'>
                            {/* <input className='p-2' value={name} onChange={(e)=>setname(e.target.name)}  placeholder='enter you email'/> */}
                            <input className='p-2'  placeholder='enter you passward'  />
                            <button onClick={conect} className='btn'>SignIn</button>
                            </div>
                    </div>

                    <div className="coloum  col-lg 4 h-200vh d-flex justify-content-center align-items-center " style={{ height: "150 vh" }}>
                        <Headingcom first="Sign"  second="in" />

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Signin
