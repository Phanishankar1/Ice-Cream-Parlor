import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate=useNavigate();
    const [registrationDetails,setregistrationDetails]=useState({
        name:"",
        email:"",
        phoneNo:"",
        password:"",
        confirmpassword:"",
      
    })
    const handleChange=(e)=>{
      setregistrationDetails({...registrationDetails,[e.target.name]:e.target.value})
}
  const handlesubmit=(e)=>{
     e.preventDefault();
    
     axios.post("http://localhost:5000/register",registrationDetails)
     .then(res=>{
      console.log(res.data);
      if(res.data==="password mismatch"){
          window.alert("password mismatch");
      }
     else if(res.data==="registered"){
      window.alert("Registration Successful");
      // console.log(registrationDetails);
       navigate('');
    }
      else{
        window.alert("email arleady exists");
        
      }
     })
   
  }
  return (
   <> 
    <form id="detail1"  style={{marginLeft:"35%",marginTop:"10px"}}  onSubmit={handlesubmit}>
          <b id="detail4">UserName :</b><input type="text" name="name"id="detail3" value={registrationDetails.name} onChange={handleChange} required/><br></br>
         <b id="detail4"> email:</b><input type="email"id="detail3" value={registrationDetails.email} name="email" onChange={handleChange} required/><br></br>
         <b id="detail4"> Phoneno:</b><input type="tel"id="detail3" value={registrationDetails.phoneNo} name="phoneNo" onChange={handleChange} required/><br></br>
         <b id="detail4"> Password:</b><input type="password"id="detail3" value={registrationDetails.password} name="password" onChange={handleChange} required/><br></br>
         <b id="detail4">Confirm Password:</b><input type="password"id="detail3" value={registrationDetails.confirmpassword} name="confirmpassword" onChange={handleChange} required/><br></br>
         <b id="detail5"></b><input type="submit"id="detail5"/><br></br>
        </form>
   </>
  )
}

export default Register