import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <button onClick={()=>{
            props.setTheme((prev)=>(
                prev== 'Dark' ? 'Light' : 'Dark'
            ))
        }}>{props.theme ==='Dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
    </div>
  )
}

export default Navbar