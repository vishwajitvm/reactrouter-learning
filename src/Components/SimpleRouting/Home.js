import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate() ;
  const navigateToAbout = () => {
    navigate('/simpleroute/about')
  }

  const navigateToFilter = () => {
    navigate('/simpleroute/filter')
  }

  return (
    <div>
      <h1>Simple Routing Home page</h1>
      <button onClick={()=>navigateToAbout()} >Go to About Page</button> <br />
      <button onClick={()=>navigateToFilter()} >Go to Filter Page</button>
    </div>
  )
}
