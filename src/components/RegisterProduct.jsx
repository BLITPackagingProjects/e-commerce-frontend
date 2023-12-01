import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterProduct = (props) => {

   

    var formData = new FormData();
  
     function handleChange(e) {
         formData.append('image',e.target.files[0]);
     }
  
    let [values, setValues] = useState({
        name:'',
        description:'',
        price:0,
        quantity:0,
        seller:''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('price', values.price);
        formData.append('quantity', values.quantity);
        formData.append('seller', values.seller);
        console.log(formData)
        console.log(values)


        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            headers: { 
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        
        }; 
        
        try{
            await axios.post("http://localhost:9090/api/v1/product", formData,config)
            .then(alert("Product Registered Successfully!"))
            .catch(err => console.log(err))
            props.history.replace("/productlist");
        }
        catch(err){
           console.log(err)
        }
    }
  return (
    <div className="container p-3 my-5 border border-dark"> 
    <h1>Product Registration</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name: </label>
            <input type="text" className="form-control" id="Name" required
            placeholder="Enter name" autoFocus 
            value={values.name} 
            onChange={e => setValues({...values, name: e.target.value})}/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description: </label>
            <input type="text" className="form-control" id="description" required
            placeholder="Enter Description"
            value={values.description} 
            onChange={e => setValues({...values, description: e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Price: </label>
            <input type="number" className="form-control" id="price" required
            placeholder="Enter price"
            value={values.price} 
            onChange={e => setValues({...values, price: e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="seller" className="form-label">Seller: </label>
            <input type="text" className="form-control" id="seller" required
            placeholder="Enter seller"
            value={values.seller} 
            onChange={e => setValues({...values, seller: e.target.value})}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity: </label>
            <input type="number" className="form-control" id="quantity" required
            placeholder="Enter Quantity"
            value={values.quantity} 
            onChange={e => setValues({...values, quantity: e.target.value})}
            />
        </div>
        <label htmlFor="image">Image: </label><br/>
        <input type='file' id="image" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
        <Link to="/productlist" className="btn btn-danger">Cancel</Link>
    </form>
</div>
  )
}

export default RegisterProduct
