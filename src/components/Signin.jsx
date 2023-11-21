import React, { useState } from 'react';
import axios from 'axios';
import "./login.css";
import {  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthorizationService from './service/AuthorizationService';

const Signin = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    //const [loginError, setLoginError] = useState(null);
    


    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await AuthorizationService.login(username, password);
        
        // if (response && response.status === 200) {
        //   // Successful login, navigate to the landing page
        //   navigate("/landing");
        // } 
        // console.log(Response)

      } catch (error) {
       
          window.alert("An error occurred during login. Please try again.");
        
      }
    };
 




  return (
    <div className="login">
        <h4>Login</h4>
        <form onSubmit={handleLogin}>
          <div className="text_area">
            <input name="username" placeholder="Email" className="text_input" value={username} onChange={(e) => setUserName(e.target.value)}
            required/>
          </div>
          <div className="text_area">
            <input name="password" type="password" placeholder="Password" className="text_input" value={password} onChange={(e) => setPassword(e.target.value)}
            required/>
          </div>
          <Link to="/forgotpassword" className="link">Forgot password?</Link>
            <input
            type="submit"
            value="LOGIN"
            className="btn"
            />
        </form>
        <p>Don't have an account? <Link to="/signup" className="link">Sign Up</Link></p>
      </div>
    )
  }

export default Signin
// class Signin extends Component {

    
//   render() {
//     return (
//       <div className="login">
//         <h4>Login</h4>
//         <form>
//           <div className="text_area">
//             <input
//               type="text"
//               id="username"
//               name="username"
//               defaultValue="username"
//               className="text_input"
//             //   value={email}
//             //                     onChange={(e) => setEmail(e.target.value)}

//             />
//           </div>
//           <div className="text_area">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               defaultValue="password"
//               className="text_input"

//             />
//           </div>
//           <a className='link' href='/forgotpassword'>Forgot password?</a>
//           <input
//             type="submit"
//             value="LOGIN"
//             className="btn"

//           />
//         </form>
//         <p>Don't have an account? <a className="link" href="/signup">Sign Up</a></p>
//       </div>
//     )
//   }
// }

// export default Signin;