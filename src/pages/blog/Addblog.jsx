import React from 'react'
import Layout from '../../component/Layout'
import Form from './component/Form'
import axios from 'axios'
import { baseurl } from '../../config'
import { useNavigate } from 'react-router-dom'

const Addblog = () => {
  const navigate = useNavigate()
  const handleAdd = async (data)=>{
              {/* yedi image xa vni header garera multipart/form-data garna parxa  || natra xaena vaney json ma janxa (by default) jaha string matra janxa (url pani jana sakyo*/}
    const response = await axios.post(`${baseurl}/blog`,data,{       
    headers:{
      "Content-Type":"multipart/form-data",
  
      "Authorization":localStorage.getItem("token")
    }
  })
  if(response.status===201){
    navigate("/home")
  }else{
    alert("somthing went wrong")
  }
  }
  return (
    <Layout>
         <Form type='Create' onSub={handleAdd}/>
    </Layout>
  )
}

export default Addblog

{/*authorization vanni ma token jhikeko ra server lai pthaideko ra server ley check garxa ra yedi token xa vaney blog post garxa yedi xaena vani chai login gar vanera vanxa */}