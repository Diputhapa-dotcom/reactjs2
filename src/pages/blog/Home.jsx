import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import Card from './component/Card'
import axios from 'axios';
import { baseurl } from '../../config';

const Home = () => {
  const [data,setData] = useState([]);
  const fetchBlogs = async ()=>{
   const response =  await axios.get(`${baseurl}/blog`);
  setData(response.data.data)
  }
useEffect(()=>{
  fetchBlogs()
},[]);
  return (
  <Layout>
    <div className='flex flex-wrap justify-center mt-8'>
      {
        console.log(data.length)
      }
    <Card/>

    </div>
  </Layout>
  )
}

export default Home
