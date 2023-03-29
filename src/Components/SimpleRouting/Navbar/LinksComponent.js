import React from 'react'
import { Link } from 'react-router-dom'

export default function LinksComponent() {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/simpleroute/home">Simple-router-Home</Link> <br />
      <Link to="/simpleroute/about">Simple-router-About</Link>
    </div>
  )
}
