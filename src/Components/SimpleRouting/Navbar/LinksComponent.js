import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import '../../../App.css';


export default function LinksComponent() {
  return (
    <div className='navlinks'>
      <ul>
      <li> <NavLink to="/" style={{textDecoration: 'none'}}>Home</NavLink> </li> 
      <li> <NavLink to="/simpleroute/home" style={{textDecoration: 'none'}}>Simple-router-Home</NavLink> </li>
      <li> <NavLink to="/simpleroute/about" style={{textDecoration: 'none'}}>Simple-router-About</NavLink>  </li>
      <li> <NavLink to="/simpleroute/users/vishwajit" style={{textDecoration: 'none'}}>Simple-routes-dynamic-users</NavLink>  </li>
      </ul>
    </div>
  )
}
