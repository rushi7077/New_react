import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-amber-800 flex justify-between fixed w-full items-center p-5 z-50'>
        <div className='text-4xl font-bold text-white'>AgroBazaar</div>
        <div className='flex gap-10 text-xl text-white font-semibold'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    </div>
  )
}

export default Navbar