import React from 'react'
import { Link } from 'react-router-dom'

export default function LinksComponent() {
  return (
    <div style={{ backgroundColor: 'lightgreen' , padding:'15px 0px',textDecoration: 'none' }}>
      <Link to="/" style={{textDecoration: 'none'}}>Home</Link> <br />
      <Link to="/simpleroute/home" style={{textDecoration: 'none'}}>Simple-router-Home</Link> <br />
      <Link to="/simpleroute/about" style={{textDecoration: 'none'}}>Simple-router-About</Link> <br />
      <Link to="/simpleroute/users/vishwajit" style={{textDecoration: 'none'}}>Simple-routes-dynamic-users</Link> <br />
    </div>
  )
}
