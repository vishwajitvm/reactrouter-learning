import React from 'react'
import { BrowserRouter ,Routes ,Route ,Link } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import LinksComponent from './LinksComponent'
import HomeMain from '../../HomeMain'

export default function NavbarComponent() {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <BrowserRouter>
      <LinksComponent />
      <Routes>
            <Route path="/" element={<HomeMain/>} />
            <Route path="/simpleroute/home" element={<Home/>} />
            <Route path="/simpleroute/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
