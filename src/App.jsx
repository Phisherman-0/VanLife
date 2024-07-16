import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VansDetails'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/vans' element={<Vans />}/>
            <Route path='/vans/:id' element={<VanDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
