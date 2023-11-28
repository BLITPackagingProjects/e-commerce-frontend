import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
        <li>Home</li>
        
        </Link>
        {localStorage.getItem('token')?
        <Link to="/productlist">

        
            <li>Products</li>
        
        
            
        </Link>:null
        }
            
        <li>Orders</li>
        <Link to="/logout">
        <li>Log Out</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
