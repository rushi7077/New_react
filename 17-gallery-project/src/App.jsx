import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

const getData= async()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

  setUserData(response.data)
  
}

useEffect(()=>{
  getData()
},[index])

let printUserData = <h2 className='text-white text-xl absolute top-1/2 left-1/2 
-translate-x-1/2 -translate-y-1/2'>Loading...</h2> 

if(userData.length>0){
  printUserData = userData.map((elm,idx)=>{
    return <a href={elm.url}>
      <div key={idx} className='h-60 w-54 bg-amber-400 text-black '>
      <div className='h-50 w-54'>
        <img className='h-full w-full object-cover' src={elm.download_url} alt="" />
    </div>
    <h3 className='h-10 flex justify-center items-center text-sm text-center 
    font-bold'>Clicked By : {elm.author}</h3>
    </div>
    </a>
  })
}

  return (
    <div className='bg-black h-screen p-5 overflow-auto'>
      {/*<div className='flex justify-center'>
          <button onClick={()=>{
        getData()
      }} className='bg-green-500 active:bg-gray-700
        active:scale-90 px-5 py-3 rounded m-5'>Get Images
      </button>
      </div>*/}
      {/*<h1 className='bg-amber-400 text-black font-bold text-2xl w-10 h-10 rounded-full flex items-center justify-center'>{index}</h1>*/}
      <div>
          <div className='w-full h-[85%] flex flex-wrap justify-center gap-10 p-10'>{printUserData}</div>
      </div>
      <div className='flex justify-center gap-10 py-10 mb-10 '>
        <button className='bg-amber-400 cursor-pointer rounded active:scale-95 active:bg-white  text-lg font-bold px-5 py-2' 
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}>
          prev
        </button>
        <button className='bg-black rounded text-lg font-bold px-5 py-2 text-white' >Page {index}</button>
        <button className='bg-amber-400 cursor-pointer rounded active:scale-95 active:bg-white text-lg font-bold px-5 py-2' 
        onClick={()=>{
          setIndex(index+1)
        }}>
          next
        </button>
      </div>
    </div>
  )
}

export default App