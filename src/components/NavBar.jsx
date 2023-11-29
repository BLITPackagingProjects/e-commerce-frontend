import React from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'
import {MDBNavbarNav} from 'mdb-react-ui-kit'

const NavBar = () => {
  return (
    <MDBNavbarNav>
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

        {localStorage.getItem('token')?
          <SearchField />:null
        }
            
        <li>Orders</li>
        <Link to="/logout">
        <li>Log Out</li>
        </Link>
      </ul>
    </div>
    </MDBNavbarNav>
  )
}

export default NavBar