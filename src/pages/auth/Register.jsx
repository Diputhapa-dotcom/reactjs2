import React from 'react'
import Submit from './Submit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
 const navigate =  useNavigate()
  const handleRegister =async (data)=>{
try {
  
    
   const response = await axios.post("https://react30.onrender.com/api/user/register",data);

 if(response.status===201){
   navigate("/login");
   }else{
    alert("somthing went wrong");
   }


   
} catch (error) {
  alert(error.response.data.message);
}



  }
  return (
   <>
    <Submit type='Register' onSub={handleRegister}/>
   </>
  )
}

export default Register




