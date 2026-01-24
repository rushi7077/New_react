import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [userData, setUserData] = useState([]);

const getData= async()=>{
  const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')

  setUserData(response.data)
  
}

let printUserData = "No data available" 

if(userData.length>0){
  printUserData = userData.map((elm,idx)=>{
    return <a href={elm.url}>
      <div key={idx} className='h-60 w-54 bg-white text-black '>
      <div className='h-50 w-54'>
        <img className='h-full w-full object-cover' src={elm.download_url} alt="" />
    </div>
    <h3 className='h-10 flex justify-center items-center text-sm text-center font-bold'>Clicked By : {elm.author}</h3>
    </div>
    </a>
  })
}

  return (
    <div className='bg-fuchsia-500 h-screen p-5 overflow-auto'>
      <div className='flex justify-center'>
          <button onClick={()=>{
        getData()
      }} className='bg-green-500 active:bg-gray-700
        active:scale-90 px-5 py-3 rounded m-5'>Get Images
      </button>
      </div>
      <div>
          <h2 className='w-full flex flex-wrap justify-center gap-10 p-10'>{printUserData}</h2>
      </div>
    </div>
  )
}

export default App