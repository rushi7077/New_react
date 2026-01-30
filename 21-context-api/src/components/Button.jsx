import React, { useContext } from 'react'
import {ThemeDataContext} from '../contexts/ThemeContext'
import {TextC} from '../contexts/TextColorContext'

const Button = () => {

  const [theme,setTheme] = useContext(ThemeDataContext)
  const [color,setColor] = useContext(TextC)

  return (
    <button className='py-2 px-5 bg-black text-white  rounded' 
    onClick={()=>{
      setTheme((prev)=>(
        prev === 'light' ? 'dark' : 'light'
      ))
      setColor((prev)=>(
        prev=== 'white' ? 'black' : 'white'
      ))
    }}>button</button>
  )
}

export default Button