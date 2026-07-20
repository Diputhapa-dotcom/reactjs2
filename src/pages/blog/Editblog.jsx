import React from 'react'
import Layout from '../../component/Layout'
import Form from './component/Form'
import axios from 'axios'
import { baseurl } from '../../config'
import { useParams } from 'react-router-dom'

const Editblog = () => {
  const {id} = useParams()
  const handleEdit =async  (data)=>{
 const response = await axios.put(`${baseurl}/edit/${id}`);
 console.log(response.data)

  }
  
  return (
    <Layout>
    <Form type='Edit' onSub={handleEdit}/>
    </Layout>
  )
}

export default Editblog