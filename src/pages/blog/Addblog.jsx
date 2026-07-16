import React from 'react'
import Layout from '../../component/Layout'
import Form from './component/Form'
import axios from 'axios'
import { baseurl } from '../../config'

const Addblog = () => {
  const handleAdd = async (data)=>{
              {/* yedi image xa vni header garera multipart/form-data garna parxa  || natra xaena vaney json ma janxa (by default) jaha string matra janxa (url pani jana sakyo*/}
    const response = await axios.post(baseurl+'/blog',data,{       
    headers:{
      "Content-Type":"multipart/form-data"
    }
  })
  console.log(response);
  }
  return (
    <Layout>
         <Form type='Create' onSub={handleAdd}/>
    </Layout>
  )
}

export default Addblog