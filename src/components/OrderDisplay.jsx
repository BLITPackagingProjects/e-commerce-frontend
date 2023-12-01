import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBRow
  } from 'mdb-react-ui-kit';
import axios from 'axios';
import Display from './Display';
  

const OrderDisplay = (props) => {
  const [products,setProducts] = useState([])
  const [shown,setShown] = useState(false)
  const toggle =()=>{
    setShown(!shown)
  }
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(()=>{
    axios.get(`http://localhost:9090/api/v1/product/order/${props.val.order_id}`,config).then((res)=>setProducts(res.data))
    

  },[])
  return (
    <div>
       <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Order</MDBCardTitle>
       
        {/* <MDBBtn>Button</MDBBtn> */}
        <MDBCardText>Ordered date: {props.val.date}</MDBCardText>

        
        <MDBCardText>Ordered by: {props.val.user.firstName} {props.val.user.lastName}</MDBCardText>
        <MDBBtn onClick={toggle}>Show Products</MDBBtn>
        {shown ? 
          <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
          {
            products.map((item)=>{
              return (
                <Display key={item.product_id} val={item}/>
                )
              })
            }
            </MDBRow>
        :null}
      </MDBCardBody>
    </MDBCard>
    <br/>
    </div>
  )
}

export default OrderDisplay
