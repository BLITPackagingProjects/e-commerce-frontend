import React from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const Forgotpassword = () => {
  return (
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
                className="bg-dark text-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <MDBIcon size={'2x'} icon={"lock"}/>
                <br/>
                <h2 className="fw-bold mb-2">Forgot Password?</h2>
                <p className="text-white-50 mb-5">
                  You can reset your password here
                </p>

                <div>
                  <MDBInput
                      textBefore={<MDBIcon far icon="envelope" /> }
                      wrapperClass="mb-4 mt-4 mx-auto w-100"
                      labelClass="text-white"
                      label="Email address"
                      id="formEmail"
                      type="email"
                      size="lg"
                      required
                  />
                  <div className="d-grid gap-2">

                    <MDBBtn type={"submit"} size={"lg"}>Reset Password</MDBBtn>
                  </div>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  )
}

export default Forgotpassword