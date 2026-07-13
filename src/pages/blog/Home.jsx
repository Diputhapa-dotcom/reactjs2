import React from 'react'
// import picture from '../../assets/pic2.webp' 
import Layout from '../../component/Layout'
import Card from './component/Card'

const Home = () => {
  return (
  <Layout>
    <div className='flex flex-wrap justify-center mt-8'>

    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </Layout>
  )
}

export default Home