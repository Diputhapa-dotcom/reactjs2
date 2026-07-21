 import React from 'react'
import Submit from './Submit'
import axios from 'axios'
import { baseurl } from '../../config'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const handleLogin = async (data)=>{  {/**data chai object ma pthauna parxa aarthad json form ma pthauna parxa */}

    
    
    const response = await axios.post(`${baseurl}/login`,data);
   if(response.status===200){
    {/* server bata pthayeko token data vitra hunxa*/}
    console.log(response.data); 
    localStorage.setItem("token",response.data.token)
   navigate("/home")

   }
   
  }
  return (
<Submit type="Login" onSub={handleLogin}/>
  )
}

export default Login
 




