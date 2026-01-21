import React from 'react'

function App() {

  const formHandler = (e)=>{
    e.preventDefault();
    console.log("Form is submitted.");
    
  }

  return (
    <div className='bg-fuchsia-500 flex flex-row items-center justify-center gap-3 h-screen w-full'>
      <div >
      <form className='flex flex-col gap-3' onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input className='p-6 bg-amber-300 outline-none' type="text"  placeholder='Enter your name '/>
        <button className='bg-blue-400 p-5'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default App