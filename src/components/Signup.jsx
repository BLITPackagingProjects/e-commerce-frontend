import React, { useState } from 'react';
//import axios from 'axios';
import "./Signup.css";
//import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}

from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AuthorizationService from './service/AuthorizationService';


const Signup = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const obj = {
      firstName: firstname,
      lastName: lastname,
      username: username,
      password: password,
      
      
    }

    console.log(obj);
    try {
     const response = await AuthorizationService.signup(obj).then(
        (response) => {
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
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Sign up</h2>
              <p className="text-white-50 mb-5">Please enter your information!</p>

              
              <MDBInput wrapperClass='mb-4 mx-5 w-100' pattern="[A-Za-z]+" labelClass='text-white' label='First Name' id='formControlLg' type='firstname' size="lg" onChange={(e) => setFirstName(e.target.value)} style={{ color: 'white' }} required="required"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' pattern="[A-Za-z]+" labelClass='text-white' label='Last Name' id='formControlLg' type='lastname' size="lg" onChange={(e) => setLastName(e.target.value)} style={{ color: 'white' }} required="required"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setUserName(e.target.value)} style={{ color: 'white' }} required/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} style={{ color: 'white' }} required/>
              
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleSignup}>
                Signup
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Go back to <Link to="/" class="text-white-50 fw-bold">Sign In</Link></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );


  
  }

export default Signup
