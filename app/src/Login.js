import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
  const [logindetails,setlogindetails]=useState({
    email:"",
    password:""
  });
  const handlechange=(e)=>{
        setlogindetails({...logindetails,[e.target.name]:e.target.value})
  }
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(logindetails);
    axios.post("http://localhost:5000/login",logindetails)
    .then(res=>{
      let message=res.data;
       if(message==="found")  
       navigate('/customerdetails');
       else window.alert("Invald Credentials");
     
    })
}

  return (
   <div id="login_form">
    <form id="detail1" onSubmit={handleSubmit} style={{marginLeft:"35%",marginTop:"10px"}}>
      <table>
        <tbody>
      <tr><th><h2>Email:</h2></th><td><input type='email' name='email' value={logindetails.email} onChange={handlechange} id="logi"/></td></tr>
      <tr><th><h2>password:</h2></th><td><input type='password' name='password' value={logindetails.password} onChange={handlechange} id="logi"/></td></tr>
      <tr ><td colSpan="2" style={{textAlign:"center"}}><input type='submit' value="login" id="button"></input></td></tr>
      </tbody>
      </table>
    </form>
   </div>
  )
}

export default Login;