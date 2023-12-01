import React from 'react'
import { Link } from 'react-router-dom'
import SearchField from './SearchField'
import {MDBContainer, MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav} from 'mdb-react-ui-kit'

const NavBar = (props) => {

  // const val = (localStorage.getItem('user').user.roleList).filter((item)=>item.userRole.type_id==2)
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
    <div>
      {localStorage.getItem('token')?null:
          <MDBNavbarItem className="d-inline-flex p-2">
            <Link to="/">
              <MDBNavbarLink>
                Home
              </MDBNavbarLink>
            </Link>
          </MDBNavbarItem>
        }
        {localStorage.getItem('token')?

          <MDBNavbarItem className="d-inline-flex p-2">
            <Link to="/productlist">
              <MDBNavbarLink>
                Products
              </MDBNavbarLink>
            </Link>
          </MDBNavbarItem>:null
        }

        
        {localStorage.getItem('token')? 
        <MDBNavbarItem className="d-inline-flex p-2">
          <Link to="/orderhistory">
          <MDBNavbarLink>
            Orders
            </MDBNavbarLink>
          </Link>
        </MDBNavbarItem>
        :null
        }
        {localStorage.getItem('token')&&localStorage.getItem("type")==1? 
        <MDBNavbarItem className="d-inline-flex p-2">
          <Link to="/cart">
            <MDBNavbarLink>Cart</MDBNavbarLink>
          </Link>
        </MDBNavbarItem>:null
        }   
        {localStorage.getItem('token')?
        <MDBNavbarItem className="d-inline-flex p-2">
          <Link to="/logout">
            <MDBNavbarLink>Log Out</MDBNavbarLink>
          </Link>
        </MDBNavbarItem>:null
        }
        {localStorage.getItem('token')?
        
          <SearchField {...props}/>
        :null
          
        }
        </div>
      
    
    </MDBNavbarNav>
    </MDBContainer>
    </MDBNavbar>
  )
}

export default NavBar
