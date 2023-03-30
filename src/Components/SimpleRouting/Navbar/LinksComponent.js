import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import '../../../App.css';


export default function LinksComponent() {
  return (
    <div className='navlinks'>
      <ul>
      <li> <NavLink to="/" style={{textDecoration: 'none'}}>Main Home</NavLink> </li> 
      <li> <NavLink to="/simpleroute/home" style={{textDecoration: 'none'}}>Home</NavLink> </li>
      <li> <NavLink to="/simpleroute/about" style={{textDecoration: 'none'}}>About</NavLink>  </li>
      <li> <NavLink to="/simpleroute/users/vishwajit" style={{textDecoration: 'none'}}>Dynamic-users</NavLink>  </li>
      <li> <NavLink to="/simpleroute/filter?age=15&name=vishwajit" style={{textDecoration: 'none'}}>Filters</NavLink>  </li>
      </ul>
    </div>
  )
}
