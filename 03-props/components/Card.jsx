import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1> {props.name}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>click</button>

    </div>
  )
}

export default Card