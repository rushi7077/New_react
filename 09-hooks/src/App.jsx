import React from 'react'
import { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)

  function increasing(){
    setNum(num+1)
  }
   function decreasing(){
    setNum(num-1)
   }

  return (
    <div className='bg-yellow-200 h-screen w-full flex items-center justify-center flex-col gap-20 '>
      <h1 className='bg-orange-600 h-60 w-80 rounded-2xl flex items-center justify-center text-8xl font-bold'>{num}</h1>
      <div className='h-20 w-fit gap-10 flex flex-row text-4xl  '>
        <button onClick={increasing} className='bg-pink-500 px-5 py-4 rounded-2xl'>Increase</button>
        <button onClick={decreasing} className='bg-green-500 px-5 py-4 rounded-2xl'>Decrease</button>
      </div>

    </div>
  )
}

export default App