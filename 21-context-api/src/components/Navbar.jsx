import Navbar2 from './Navbar2'
import Button from './Button'
import { useContext } from 'react'
import { ThemeDataContext } from '../contexts/ThemeContext'
import {TextC} from '../contexts/TextColorContext'

function Navbar() {

  const [theme] = useContext(ThemeDataContext)
  const [color] = useContext(TextC)

  return (
    <div className='h-screen'>
      <div className={`h-20 ${theme === 'light' ? "bg-amber-600" : "bg-emerald-700"} ${color=== 'white'? "text-white" : "text-black"} flex justify-between p-4 items-center`}>
        <h2 className='text-2xl font-bold'>AgroBazaar</h2>
        <Navbar2/>
       
      </div>
      <div className='flex justify-center items-center h-[88%]'><Button/></div>
    </div>
  )
}
         
export default Navbar