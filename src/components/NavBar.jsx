import React from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'
import {MDBNavbarNav} from 'mdb-react-ui-kit'

const NavBar = (props) => {
  return (
    <MDBNavbarNav>
    <div>
      <ul>{localStorage.getItem('token')?null:
        <Link to="/">
        <li>Home</li>
        
        </Link>
        }
        {localStorage.getItem('token')?
        <Link to="/productlist">

        
            <li>Products</li>
        
        
            
        </Link>:null
        }

        {localStorage.getItem('token')?
          <SearchField {...props}/>:null
        }
            
        <li>Orders</li>
        { localStorage.getItem('token')?

          <Link to="/logout">
        <li>Log Out</li>
        </Link>:null
        }
      </ul>
    </div>
    </MDBNavbarNav>
  )
}

export default NavBar
