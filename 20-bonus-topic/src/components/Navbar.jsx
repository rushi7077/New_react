import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <button className={`px-4 py-2 rounded text-3xl font-bold ${props.theme === 'Dark' ? "bg-white text-black" : "bg-black text-white"}`} onClick={()=>{
            props.setTheme((prev)=>(
                prev== 'Dark' ? 'Light' : 'Dark'
            ))
        }}>{props.theme ==='Dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
    </div>
  )
}

export default Navbar