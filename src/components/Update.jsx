import React, { useState } from 'react'
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from 'axios';

const Update = (props) => {

const [name, setName] = useState()
const [desc, setDesc] = useState()

const [seller, setSeller] = useState()
const [price, setPrice] = useState()
const [quantity, setQuantity] = useState()



const handleUpdate = (e) =>{
    e.preventDefault();
    const obj = {
        name:name,
        description:desc,
        seller:seller,
        price:price,
        quantity:quantity
    }

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    
       
      };

    axios.put(`http://localhost:9090/api/v1/product/${props.match.params.id}`,obj,config).then(()=>{
        props.history.replace("/productlist")
    })
   
}
  return (
    <div>

<form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Product name' value={name}  onChange={(e) => setName(e.target.value)}/>
      <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Product Description' value={desc}  onChange={(e) => setDesc(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Seller' value={seller} onChange={(e) => setSeller(e.target.value)}/>

      <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Price' value={price} onChange={(e) => setPrice(e.target.value
      )}/>

      <MDBInput type='number' id='form4Example2' wrapperClass='mb-4' label='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      


      <MDBBtn type='submit' className='mb-4' block onClick={handleUpdate}>
      Update
      </MDBBtn>
    </form>


      
    </div>
  )
}

export default Update
