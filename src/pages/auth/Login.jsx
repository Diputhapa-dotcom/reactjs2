 import React from 'react'
import Submit from './Submit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseurl } from '../../config'

const Login = () => {

  const navigate = useNavigate()
  const handleLogin = async (data)=>{  {/**data chai object ma pthauna parxa aarthad json form ma pthauna parxa */}

    
    
    const response = await axios.post(`${baseurl}/login`,data);
    if(response.status===200){
      localStorage.setItem("token",response.data.token);
    
    }
  

  }
  return (
<Submit type="Login" onSub={handleLogin}/>
  )
}

export default Login
 




