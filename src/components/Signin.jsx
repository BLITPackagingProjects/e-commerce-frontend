import React, { useState } from "react";
import axios from 'axios'
import "./login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import AuthorizationService from "./service/AuthorizationService";
import { Link } from "react-router-dom";

const Signin = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const API_URL = "http://localhost:9090/api/v1/auth";
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const obj = {
      username: username,
      password: password,
    };

    console.log(obj);

    axios.post(API_URL + "/authenticate", obj).then((res)=>{
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id',res.data.user.user_id)
      const roles = res.data.user.roleList
      // console.log(res.data.user.roleList);
      roles.map((item)=>{
        if(item.userRole.type_id == 2){
          localStorage.setItem('type',2)
        } else if(item.userRole.type_id == 1){
          localStorage.setItem('type',1)
        }
      })
      axios.get(`http://localhost:9090/api/v1/ecommerce/order/active/${localStorage.getItem('id')}`,{headers:{'Authorization': `Bearer ${res.data.token}`}}).then(
        (res)=>{
          console.log(res)
          localStorage.setItem("cartId",res.data.order_id)
          props.history.replace("/productlist")
        }
      )
      
     })

    

   


    // try {
    //   const response = await AuthorizationService.login(obj).then(
    //     (response) => {
    //       // window.location.href = "/landing";
    //       props.history.replace("/productlist")
    //       console.log(response)
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                onChange={(e) => setUserName(e.target.value)}
                style={{ color: "white" }}
                required
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "white" }}
                required
              />

              <p className="small mb-3 pb-lg-2">
                <Link to="/forgotpassword" className="text-white-50">
                  Forgot password?
                </Link>
              </p>
              <MDBBtn
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
                onClick={handleLogin}
              >
                Login
              </MDBBtn>

              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-white-50 fw-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signin;
