import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Submit = ({type,onSub}) => {
  const [data,setData] = useState({
    email:"",
    username:"",
    password:""
  })
  const handleChange = (e)=>{
const {name,value} = e.target;
setData({
  ...data,
  [name]:value
})
}
const handleSubmit=(e)=>{   {/* e--> event */}
e.preventDefault();
onSub(data); { /* yo onsubmit chai submit component ko call vako ho jaha chai mathi ko data jati */}
}
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
  <div className="max-w-sm w-full text-gray-600 space-y-5">
    <div className="text-center pb-8">
      <img src="https://ossimg.cmdgametransit.com/OK.Win/other/h5setting_20240313155706n3d7.png" width={150} className="mx-auto" />
      <div className="mt-5">
        <h1 className="text-gray-800 text-2xl font-bold sm:text-3xl"> {type==="Register" ? 'Register' : 'Login'}
        </h1>
      </div>
    </div>




  {/*onSubmit chai data api lai pthauna garinxa*/}
    <form onSubmit={handleSubmit} className="space-y-5 ">

    {
      type==='Register' &&(
          <div>
        <label className="font-medium"> Username </label>
        <input type="text" name='username' required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg" onChange={handleChange} />
      </div>
      )
    }
      <div>
        <label className="font-medium"> Email </label>
        <input type="email" name='email' className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg  " onChange={handleChange} />
      </div>
      <div>
        <label className="font-medium"> Password </label>
        <input type="password" name='password' required className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg" onChange={handleChange}  />
      </div>
      <button className="w-full px-4 py-3 mt-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
        {type==="Register" ? 'Register' : 'Login'}
      </button>
    </form>


    <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
      {/* SVG for Google Sign In */}
      <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" className="w-5 h-5" />
      {/* Comment: Google Icon SVG here */}
      Continue with Google
    </button>
    <p className="text-center">
        {type==="Register" ? "Already" : "Don't"} have an account? 
      <a className="font-medium text-red-600 hover:text-red-500 m-1">
         {type==="Register" ?(
       <Link to='/login'>Login </Link> ) :(
        <Link to='/register'>Register</Link>
      )
    }</a>
    </p>
  </div>
</main>
  )
}

export default Submit