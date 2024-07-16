import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VansDetails'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
