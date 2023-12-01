import axios from "axios";

const API_URL = "http://localhost:9090/api/v1/auth";

const signup = async (body) => {

  // try {
  //   const response = await axios.post(API_URL + "/register", body);

  //   if (response.data.accessToken) {
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //   }

  //   return response.data;
  // } catch (error) {
  //   // Check if it's an AxiosError
  //   if (axios.isAxiosError(error)) {     
  //     if(error.response.status === 400) {
  //       alert("This username is already taken")
  //     }
  //   } else {
  //     // Handle other types of errors
  //     console.error('Error during login:', error);
  //   }

  //   // Rethrow the error or handle it as needed
  //   throw error;
  // }
  await axios.post(API_URL + "/register", body).then((res)=>{
    localStorage.setItem('token',res.data.token)
  localStorage.setItem('id',res.data.user.user_id)
  const roles = res.data.user.roleList
  roles.map((item)=>{
    if(item.userRole.type_id == 2){
      localStorage.setItem('type',2)
    }else if(item.userRole.type_id == 1){
          localStorage.setItem('type',1)
        }
  })
  axios.post(`http://localhost:9090/api/v1/ecommerce/order/checkout/${res.data.user.user_id}`,{headers:{'Authorization': `Bearer ${res.data.token}`}}).then(
    (res)=>{
      localStorage.setItem("cartId",res.data.order_id)
    }
  )
})
    
};


const login = async (body) => {
  // try {
  //   const response = await axios.post(API_URL + "/authenticate", body);

  //   if (response) {
  //     console.log(response.data)
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //   }

  //   return response.data;
  // } catch (error) {
  //   // Check if it's an AxiosError
  //   if (axios.isAxiosError(error)) {
  //     // Access the response status, data, headers, etc.
  //     console.error('AxiosError:', error.response.status, error.response.data);
  //   } else {
  //     // Handle other types of errors
  //     console.error('Error during login:', error);
  //   }

  //   // Rethrow the error or handle it as needed
  //   throw error;
  // }

 axios.post(API_URL + "/authenticate", body).then((res)=>{
  console.log(res.data)
  localStorage.setItem('token', res.data.token)
 })


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