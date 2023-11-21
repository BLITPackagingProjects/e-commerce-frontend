import React from 'react'
import {  Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>You Signed In Successfully!!!</h1>
      <Link to="/" className="link">Sign Out</Link>
    </div>
  )
}

export default Home