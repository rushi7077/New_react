import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [theme, setTheme] = useState('Light')

  return (
    <div className={`min-h-screen flex justify-center items-center ${theme === 'Light' ? "bg-white text-black" : "bg-black text-white"}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App