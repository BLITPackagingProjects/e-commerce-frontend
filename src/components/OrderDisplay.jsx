import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  

const OrderDisplay = (props) => {
  return (
    <div>
       <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Order</MDBCardTitle>
       
        {/* <MDBBtn>Button</MDBBtn> */}
        <MDBCardText>Ordered date: {props.val.date}</MDBCardText>

        
        <MDBCardText>Ordered by: {props.val.user.firstName} {props.val.user.lastName}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default OrderDisplay
