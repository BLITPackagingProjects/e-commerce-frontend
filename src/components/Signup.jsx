import React, { useState } from 'react';
//import axios from 'axios';
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import AuthorizationService from './service/AuthorizationService';


const Signup = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthorizationService.signup(username, password).then(
        (response) => {
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="login">
        <h4>Sign up</h4>
        <form onSubmit={handleSignup}>
            <div className="text_area">
                <input name="firstName" placeholder="First Name" className="text_input" required={true}/>     
            </div>

            <div className="text_area">
                <input name="lastName"placeholder="Last Name" className="text_input" required={true} />
            </div>

            <div className="text_area">
                <input name="username" placeholder="Email" className="text_input" required={true} value={username}
                    onChange={(e) => setUserName(e.target.value)}/>
            </div>

          <div className="text_area">
            <input name="password" placeholder="Password" className="text_input" required={true} value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <input type="submit" value="SIGNUP" className="btn" />
        </form>
      
      </div>
    )
  }

export default Signup
