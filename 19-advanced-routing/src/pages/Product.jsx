import React from 'react'
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
        <div className='text-5xl font-bold absolute top-90 left-150 flex gap-20'>
            <Link to="/product/men">Men</Link>
            <Link to="/product/women">Women</Link>
        </div>
    </div>
  )
}

export default Product