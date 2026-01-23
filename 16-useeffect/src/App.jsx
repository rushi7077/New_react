import React, { useEffect, useState } from 'react'

function App() {

  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  const aChanging = ()=>{
    console.log("A is changing");
    
  }

  const bChanging = ()=>{
    console.log("B is changing");
    
  }

  useEffect(()=>{
    aChanging();
  },[a])

  useEffect(()=>{
    bChanging();
  },[b])

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={(()=>{
        setA(a+1)
      })}>A</button>
      <button onClick={(()=>{
        setB(b+1)
      })}>B</button>
    </div>
  )
}

export default App