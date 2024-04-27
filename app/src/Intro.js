import React from 'react'
import { Outlet } from 'react-router-dom'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import App from "./App"
import { Link } from 'react-router-dom'
function Intro() {
   const navigate=useNavigate();
  return (
    
    <div id="intro1">
    <center>
     <h1 id="intro2">This is Intro</h1>
    <button onClick={()=>{navigate("login")}} id="int">login</button>
    <button onClick={()=>{navigate("register")}}id="int">register</button>
    <Outlet/>
     </center>
    </div>
  )     
}

export default Intro