 import React from 'react'
import Submit from './Submit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseurl } from '../../config'

const Login = () => {

  const navigate = useNavigate()
  const handleLogin = async (data)=>{  {/**data chai object ma pthauna parxa aarthad json form ma pthauna parxa */}
  try { 
    
    
    const response = await axios.post(baseurl+"/login",data);
  
   if(response.status===200){
   navigate("/login")

   }else{
    alert("failed")
   }
    





  } catch (error) {
    alert(error.response.data.message);
    
  }

  }
  return (
<Submit type="Login" onSub={handleLogin}/>
  )
}

export default Login





