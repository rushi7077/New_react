import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'

function App() {
  return (
    <div className='min-h-screen bg-radial from-amber-400 to-cyan-600 overflow-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App