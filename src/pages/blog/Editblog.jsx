import React from 'react'
import Layout from '../../component/Layout'
import Form from './component/Form'
import axios from 'axios'
import { baseurl } from '../../config'

const Editblog = () => {
  const handleEdit =async  (data)=>{
 await axios.post(baseurl+'/edit')
  }
  
  return (
    <Layout>
    <Form type='Edit' onSub={handleEdit}/>
    </Layout>
  )
}

export default Editblog