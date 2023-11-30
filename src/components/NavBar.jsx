import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand, MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [openNavSecond, setOpenNavSecond] = useState(false);
  return (
      <MDBNavbar expand='lg' className={"bg-dark text-white"}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className={"bg-dark text-white"}>BLIT ECommerce</MDBNavbarBrand>
          <MDBNavbarToggler
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenNavSecond(!openNavSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavSecond}>
            <MDBNavbarNav >
              <MDBNavbarLink  to="/">
        Home
        
        </MDBNavbarLink>
        {localStorage.getItem('token')?
        <MDBNavbarLink  to="/productlist">
            Products
        </MDBNavbarLink>:

            null
        }
              {localStorage.getItem("token")?
        <MDBNavbarLink to={"/orders"}>Orders</MDBNavbarLink>:null
              }
        <MDBNavbarLink  to="/logout">
        Log Out
        </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

  )
}

export default NavBar
