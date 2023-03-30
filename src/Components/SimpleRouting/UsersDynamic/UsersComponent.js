import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function UsersComponent() {
    const userName = useParams() ;
    const {name} = userName
  return (
    <div>
        <div className='usersNav' style={{ backgroundColor: 'orange' , padding:'15px 0px',textDecoration: 'none' }}>
            <Link to="/simpleroute/users/vishwajit" style={{textDecoration: 'none'}}>Vishwajit</Link> <br />
            <Link to="/simpleroute/users/shivani" style={{textDecoration: 'none'}}>Shivani</Link> <br />
            <Link to="/simpleroute/users/nidhi" style={{textDecoration: 'none'}}>Nidhi</Link> <br />
        </div>
      <h1>This is dynamic Routing users page</h1>
      <h2>Hello , {name}</h2>
    </div>
  )
}
