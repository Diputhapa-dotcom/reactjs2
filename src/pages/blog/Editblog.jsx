import React from 'react'
import Layout from '../../component/Layout'
import Form from './component/Form'
import axios from 'axios'
import { baseurl } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'

const Editblog = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const handleEdit =async  (data)=>{
 const response = await axios.put(`${baseurl}/edit/${id}`,data,{
  headers:{
    "Content-Type":"multipart/form-data",
    "Authorization": localStorage.getItem("token")
  }
 });
 console.log(response.data)
 navigate("/home")

  }
  
  return (
    <Layout>
    <Form type='Edit' onSub={handleEdit}/>
    </Layout>
  )
}

export default Editblog