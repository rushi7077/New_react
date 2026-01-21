import React, { useState } from 'react'

function App() {

  const [user, setuser] = useState('')

  const formHandler = (e)=>{
    e.preventDefault();
    console.log("Form is submitted by ",user);
    setuser('')
  }

  return (
    <div className='bg-fuchsia-500 flex flex-row items-center justify-center gap-3 h-screen w-full'>
      <div >
      <form className='flex flex-col gap-3' onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input onChange={(ele)=>{
          setuser(ele.target.value)
        }} className='p-6 bg-amber-300 outline-none' type="text"  placeholder='Enter your name ' value={user}/>
        <button className='bg-blue-400 p-5'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default App