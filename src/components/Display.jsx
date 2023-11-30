import React from 'react'
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBCol,
    MDBCheckbox
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Display = (props) => {

const handleDelete = ()=>{

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    
       
      };
   
    axios.delete(`http://localhost:9090/api/v1/product/${props.val.product_id}`,config).then(()=>{
        alert("Product has been deleted!!")
    })
}




  return (
   
    <div>
         <MDBCol>
  <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.val.name}</MDBCardTitle>
        <MDBCardText>
          {props.val.description}
        </MDBCardText>

        <MDBBtn onClick={handleDelete}>Delete</MDBBtn>

        <Link to={`/update/${props.val.product_id}`}>
        <MDBBtn>Update</MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
         </MDBCol>

         
         
       <Link to={'/AddProduct'}>
       <MDBBtn>ADD Product</MDBBtn> 
       </Link>
     
       
    </div>

    

  )
}

export default Display
