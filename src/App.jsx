import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/login'
import Addblog from './pages/blog/Addblog'
import Editblog from './pages/blog/Editblog'
import Singleblog from './pages/blog/Singleblog'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/blog/add' element={<Addblog/>} />
        <Route path='/blog/edit/:id' element={<Editblog/>} />
        <Route path='/blog/:id' element={<Singleblog/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App