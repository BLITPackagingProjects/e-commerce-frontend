//import axios from 'axios';

import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const signup = (username, password) => {
  return axios
    .post(API_URL + "/register", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};


const login = async (username, password) => {
  
  try {
    const response = await fetch(API_URL + "/authenticate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Assuming your backend sends a JWT token upon successful login
      const { token } = await response.json();

      // Store the token securely, e.g., in an HTTP-only cookie or local storage
      // Example using local storage (not recommended for sensitive data)
      localStorage.setItem('jwtToken', token);
      
      // Redirect or perform additional actions as needed
      return response;

      
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};


const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthorizationService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default AuthorizationService;