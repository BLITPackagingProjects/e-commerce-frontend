import React, { useState,useEffect } from 'react'
import axios from 'axios';

import Display from './Display';
import { MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const ProductList = () => {

  

  const [products, setProducts] = useState([])
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

   
  };

  useEffect(()=>{
    axios.get('http://localhost:9090/api/v1/product',config).then((res)=>setProducts(res.data))
    

  },[])


  return (
    <div>
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>

      {
        products.map((item)=>{
          return (
  
            <Display key={item.product_id} val={item}/>
            
            )
          })
          
        }
        </MDBRow>
        <Link to={'/addproduct'}>
        <MDBBtn>Add product</MDBBtn>
        </Link>
     
       

    </div>
  )
}

export default ProductList
