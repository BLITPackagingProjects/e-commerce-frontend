import React from 'react'
import {  Link } from "react-router-dom";


const Home = () => {


  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg">
              <Link to="/" className="button">Sign Out</Link>
              <li class="nav-item">
              <Link to="/home" className="nav-link active">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/products" className="nav-link active">Products</Link>
              </li>
              <li class="nav-item">
                <Link to="/cart" className="nav-link active">Cart</Link>
              </li>
            </ul>
            
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        
      </nav>
      
    </div>
  )
}

export default Home