import React from 'react'
import Submit from './Submit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseurl } from '../../config'

const Register = () => {
 const navigate =  useNavigate()
  const handleRegister =async (data)=>{
try {
  
    
   const response = await axios.post(`${baseurl}/register`,data);

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




