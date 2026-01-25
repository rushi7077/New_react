import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Product from './pages/Product'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/product' element={<Product/>} />
      </Routes>

    </div>
  )
}

export default App