import React from 'react'
import { BrowserRouter ,Routes ,Route ,Link } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import LinksComponent from './LinksComponent'
import HomeMain from '../../HomeMain'
import Page404 from '../../Page404'
import UsersComponent from '../UsersDynamic/UsersComponent'
import SearchParamComponent from '../SearchparamInRoutes/SearchParamComponent'

export default function NavbarComponent() {
  return (
    <div>
      <BrowserRouter>
      <LinksComponent />
      <Routes>
            <Route path="/" element={<HomeMain/>} />
            <Route path="/simpleroute/home" element={<Home/>} />
            <Route path="/simpleroute/about" element={<About/>} />
            <Route path="/simpleroute/users/:name" element={<UsersComponent/>} />
            <Route path="/simpleroute/filter" element={<SearchParamComponent/>} />

            <Route path="/*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
