import React, { useState } from 'react'
import axios from 'axios';

import Display from './Display';
import { MDBRow, MDBBtn } from 'mdb-react-ui-kit';

const ProductList = () => {

  const handleAddProduct = () =>{
    console.log("Product Add")
  }

  const [products, setProducts] = useState([])
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

   
  };

  axios.get('http://localhost:9090/api/v1/product',config).then((res)=>setProducts(res.data))
  

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
        <MDBBtn onClick={handleAddProduct}>Add product</MDBBtn>
     
       

    </div>
  )
}

export default ProductList
