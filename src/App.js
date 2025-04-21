import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/About/About'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import SignUp from './components/SignUp/SignUp'
import Signin from './components/SignUp/Signin'
import Todo from './components/todo/Todo'
import Tode from './components/todo/Todo2/Tode'

//hamzuuuuuuuuuuuu

function App() {
  return (
    <div>
      
      <Router>
        
      <Navbar/>

      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Todo" element={<Todo/>} />
          
          <Route path='/todo2' element={<Tode/>} />
          <Route path="/signin" element={<Signin/>} />
           <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </Router>
    <Footer/>
    </div>
  )
}

export default App
