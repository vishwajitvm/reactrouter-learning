import React from 'react'
import { Link } from 'react-router-dom'
import '../../../App.css';


export default function LinksComponent() {
  return (
    <div className='navlinks'>
      <ul>
      <li> <Link to="/" style={{textDecoration: 'none'}}>Home</Link> </li> 
      <li> <Link to="/simpleroute/home" style={{textDecoration: 'none'}}>Simple-router-Home</Link> </li>
      <li> <Link to="/simpleroute/about" style={{textDecoration: 'none'}}>Simple-router-About</Link>  </li>
      <li> <Link to="/simpleroute/users/vishwajit" style={{textDecoration: 'none'}}>Simple-routes-dynamic-users</Link>  </li>
      </ul>
    </div>
  )
}
