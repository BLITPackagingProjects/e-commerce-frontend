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
    MDBCol
  } from 'mdb-react-ui-kit';
import { Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

const Display = (props) => {
  const[image, setImg] = useState()
 
        const fetchImage = async () => {
            const res = await fetch(`http://localhost:9090/api/v1/product/image/${props.val.product_id}`);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
          };

    useEffect(() => {
        fetchImage();
      }, []);

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
const handleAdd = ()=>{
  axios.post(`http://localhost:9090/api/v1/ecommerce/order/${localStorage.getItem("cartId")}/${props.val.product_id}`)
  alert("Product has been added to cart!")
}
const handleRemove = ()=>{
  axios.delete(`http://localhost:9090/api/v1/ecommerce/order/${localStorage.getItem("cartId")}/${props.val.product_id}`)
  alert("Product has been removed!")
  props.change()
}

  return (
    <div>
         <MDBCol>

  <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.val.name}</MDBCardTitle>
        <MDBCardText>
          {props.val.description}
        </MDBCardText>
        {
          localStorage.getItem("type")==2 ?
            <div>
              <MDBBtn onClick={handleDelete}>Delete</MDBBtn>
              <Link to={`/update/${props.val.product_id}`}>
              <MDBBtn>Update</MDBBtn>
              </Link>
            </div>
          :
            <div>
              {
                props.location =="cart"?
                <MDBBtn onClick={handleRemove}>Remove from Cart</MDBBtn>
                :
                <MDBBtn onClick={handleAdd}>Add To Cart</MDBBtn>
              }
              
            </div>
        }
      </MDBCardBody>
    </MDBCard>
         </MDBCol>
    </div>
  )
}

export default Display
