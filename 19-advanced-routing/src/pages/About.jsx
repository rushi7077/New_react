import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  let navigate = useNavigate();
  return (
    <div className='bg-emerald-700 h-[200vh]'>
      <button onClick={()=>{
        navigate('/')
      }} className='mt-30 bg-amber-300 p-2 rounded mr-5 font-bold'>Go to home</button>
      <button onClick={()=>{
        navigate(-1)
      }} className='mt-30 bg-amber-300 p-2 rounded ml-5 font-bold'>Back</button>
        <div className='text-5xl font-bold absolute top-90 left-180'>About</div>
    </div>
  )
}

export default About