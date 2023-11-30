import React from 'react'
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";



const Resetpassword = () => {
    function handleSubmit(){

    }

    function handleEmail(e){
        e.preventDefault();
        let email = e.target.value.toString();

    }
    return (
        <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                    <MDBCard
                        className="bg-dark text-white my-5 mx-auto"
                        style={{ borderRadius: "1rem", maxWidth: "400px" }}
                    >
                        <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                            <br/>
                            <h2 className="fw-bold mb-2">Reset Password</h2>

                            <div className={"d-flex flex-row w-100 align-items-center gap-2"}>
                                <MDBIcon far icon="password" size={"3x"} />

                                <MDBInput

                                    wrapperClass="mb-4 mt-4 mx-auto w-100"
                                    labelClass="text-white"
                                    label="New Password"
                                    id="newPassword"
                                    type="password"
                                    size="lg"
                                    onChange={handleNewPassword}
                                    required
                                />
                            </div>
                            <div className={"d-flex flex-row w-100 align-items-center gap-2"}>
                                <MDBIcon far icon="password" size={"3x"} />

                                <MDBInput

                                    wrapperClass="mb-4 mt-4 mx-auto w-100"
                                    labelClass="text-white"
                                    label="Confirm Password"
                                    id="comfirmPassword"
                                    type="password"
                                    size="lg"
                                    onChange={handleConfirmPassword}
                                    required
                                />
                            </div>

                            <div className="d-grid gap-2 ">

                                <MDBBtn
                                    outline
                                    className="mx-2 px-5"
                                    color="white"
                                    size="lg"
                                    onClick={handleSubmit}
                                >Reset Password</MDBBtn>
                            </div>


                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Resetpassword