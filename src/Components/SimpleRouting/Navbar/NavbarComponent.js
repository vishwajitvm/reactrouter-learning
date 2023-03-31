import React from 'react'
import { BrowserRouter ,Routes ,Route ,Link } from 'react-router-dom'
import About from '../About'
import Home from '../Home'
import LinksComponent from './LinksComponent'
import HomeMain from '../../HomeMain'
import Page404 from '../../Page404'
import UsersComponent from '../UsersDynamic/UsersComponent'
import SearchParamComponent from '../SearchparamInRoutes/SearchParamComponent'
import Contact from '../Contact'
import Company from '../ContactSubPages/Company'
import Channel from '../ContactSubPages/Channel'
import Other from '../ContactSubPages/Other'

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
            {/* Nested Routes in Contact Page */}
            <Route path="/simpleroute/contact/" element={<Contact/>} >
              <Route path="company" element={<Company/>} />
              <Route path="channel" element={<Channel/>} />
              <Route path="other" element={<Other/>} />
            </Route>
            {/* Nested Route End */}

            <Route path="/*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
