import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const signup = async (body) => {

  try {
    const response = await axios.post(API_URL + "/register", body);

    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    // Check if it's an AxiosError
    if (axios.isAxiosError(error)) {     
      if(error.response.status === 400) {
        alert("This username is already taken")
      }
    } else {
      // Handle other types of errors
      console.error('Error during login:', error);
    }

    // Rethrow the error or handle it as needed
    throw error;
  }
    
};


const login = async (body) => {
  try {
    const response = await axios.post(API_URL + "/authenticate", body);

    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    // Check if it's an AxiosError
    if (axios.isAxiosError(error)) {
      // Access the response status, data, headers, etc.
      console.error('AxiosError:', error.response.status, error.response.data);
    } else {
      // Handle other types of errors
      console.error('Error during login:', error);
    }

    // Rethrow the error or handle it as needed
    throw error;
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