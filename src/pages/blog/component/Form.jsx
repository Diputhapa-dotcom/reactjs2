import React, { useState } from 'react'

const Form = ({type,onSub},) => {
 const [data,setData] = useState({
    title:'',
    subtitle:'',
  description:'',
  files:''
  })
  const handleData = (e)=>{
    const {name,value} = e.target
setData({
...data,
[name]: name==='files'? e.target.files[0] : value
})
  }
  console.log(data)
  const handleBlog = (e)=>{
    e.preventDefault();
    onSub(data)
  }
  return (
    <div className='w-screen h-screen bg-amber-200'>
 
  <section className="grow container mx-auto p-6 ">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{type} a New Blog Post</h1>
    <form onSubmit={handleBlog} className="max-w-2xl mx-auto bg-amber-260 p-6 rounded-lg shadow-md ">
      {/* Title */}
      <div className="mb-4 ">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
        <input type="text" id="title" name="title" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter blog title" onChange={handleData} />
      </div>
      {/* Title */}
      <div className="mb-4">
        <label htmlFor="subtitle" className="block text-gray-700 font-semibold mb-2">Sub Title</label>
        <input type="text" id="subtitle" name="subtitle" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter blog sub title"onChange={handleData}  />
      </div>
      {/* description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
        <textarea id="description" name="description" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your blog content here" defaultValue={""} onChange={handleData} />
      </div>
        {/* file */}
      <div className="mb-4">
        <input type="file" name="files" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your blog content here" defaultValue={""} onChange={handleData} />
      </div>
      {/* Submit Button */}
      <div className="text-center">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition">
          {type} Post
        </button>
      </div>
    </form>
  </section>

</div>
  )
}

export default Form