import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-amber-300 p-5'>
        <div className='text-4xl font-bold'>AgroBazaar</div>
        <div className='flex gap-20'>
          <Link to='/'>Home</Link>
          <Link to='/aboutUs'>About Us</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar