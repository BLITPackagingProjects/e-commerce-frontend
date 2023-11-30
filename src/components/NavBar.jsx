import React from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'
import {MDBNavbarNav} from 'mdb-react-ui-kit'

const NavBar = (props) => {

  // const val = (localStorage.getItem('user').user.roleList).filter((item)=>item.userRole.type_id==2)
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
        {localStorage.getItem('token')? <Link to="/orderhistory">
        <li>Orders</li>
        </Link>:null
      
        }   
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
