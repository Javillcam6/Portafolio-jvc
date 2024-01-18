import { useState } from 'react'
import {  useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Inicio from "./components/Inicio/Inicio.jsx"
import Proyects from "./components/Proyectos/Proyects.jsx"
import AboutMe from "./components/AboutMe/AboutMe.jsx"
import Menu from './components/Menu/Menu.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Menu />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Javillcam/proyects' element={<Proyects/>}/>
          <Route path='/Javillcam/about-me' element={<AboutMe/>}/>
        </Routes>
        <Footer />
    </>
  )
}

export default App