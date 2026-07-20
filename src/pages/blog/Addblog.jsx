import React from 'react'
import Layout from '../../component/Layout'
import Form from './component/Form'
import axios from 'axios'
import { baseurl } from '../../config'

const Addblog = () => {
  const handleAdd = async (data)=>{
              {/* yedi image xa vni header garera multipart/form-data garna parxa  || natra xaena vaney json ma janxa (by default) jaha string matra janxa (url pani jana sakyo*/}
try {
      const response = await axios.post(`${baseurl}/blog`,data,{       
   headers : {
      "Content-Type" : "multipart/form-data",
      "Authorization" : localStorage.getItem("token")
    }
  })
} catch (error) {
  console.log("the error is " + error)
  
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