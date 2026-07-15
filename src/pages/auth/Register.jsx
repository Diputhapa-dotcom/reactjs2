import React from 'react'
import Submit from './Submit'
import axios from 'axios'

const Register = () => {
  const handleRegister =async (data)=>{
   await axios.post("https://react30.onrender.com/api/user/register",data);


  }
  return (
   <>
    <Submit type='Register' onSub={handleRegister}/>
   </>
  )
}

export default Register




