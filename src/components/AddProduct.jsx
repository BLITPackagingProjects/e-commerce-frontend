import { Button } from "@mui/base";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { MDBInput } from "mdb-react-ui-kit";
import { useState } from "react"
import axios from 'axios';
import {
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';





const AddProduct = (props) => {


    const [name, setName] = useState()
const [description, setDesc] = useState()

const [seller, setSeller] = useState()
const [price, setPrice] = useState()
const [quantity, setQuantity] = useState()


    // const [open,setOpen] = useState(false)
    // const [product,setProduct] = useState({
    //     name:'',
    //     price:'',
    //     seller:'',
    //     description:'',
    //     quantity:''
    // });

    //opening new product form 
    // const handleClickOpen =()=>{
    //     setOpen(true)
    // }

    // //closing new product form 
    // const handleClickClose =()=>{
    //     setOpen(false)
    // }

    // // handle changes in form 
    // const handleChange =(event)=>{
    //     setProduct({...product,[event.target.name]:event.target.value})
    // }


    // // saving new product details
    // const handleSave =()=>{
    //     props.addProduct(product);
    //     handleClickClose();
    //     console.log(props);
    // }


     // function for adding new product
 const addProduct =async (product) => {

    product.preventDefault();
    const obj = {
        name:name,
        description:description,
        seller:seller,
        price:price,
        quantity:quantity
    }

    let config = {
      maxBodyLength: Infinity,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type':'application/json'
      },
      method:'Post'
    };
   
    axios.post('http://localhost:9090/api/v1/product',obj,config).then((res)=>{
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      console.log(res.data.token);
    });
  }


//https://mdbootstrap.com/docs/standard/forms/overview/
// use this for form here instead of dialoges. 

  return (



<div>

    <form>

    {/* <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Price' value={price} onChange={(e) => setPrice(e.target.value
      )}/> */}
      
      <MDBInput  type='text' id='form4Example2' wrapperClass='mb-4' label='Product Name' value={props.name} onChange={(e) => setName(e.target.value)}/>
      <MDBInput  type='text' id='form4Example2' wrapperClass='mb-4' label='Product Price' value={props.price} onChange={(e) => setPrice(e.target.value)}/>
      <MDBInput  type='text' id='form4Example2' wrapperClass='mb-4' label='Product Seller' value={props.seller} onChange={(e) => setSeller(e.target.value)}/>
      <MDBInput  type='text' id='form4Example2' wrapperClass='mb-4' label='Product Description' value={props.description} onChange={(e) => setDesc(e.target.value)}/>
      <MDBInput  type='text' id='form4Example2' wrapperClass='mb-4' label='Product Quantity' value={props.quantity} onChange={(e) => setQuantity(e.target.value)}/>
    
    </form>

    <MDBBtn type='submit' className='mb-4' block onClick={addProduct}>
      Save
      </MDBBtn>


</div>


    

//     <div> 
//     <Box m={1} 
//     display='flex'
//     justifyContent='center'
//       alignItems='center'>
//     <Button onClick={handleClickOpen}>ADD PRODUCT</Button>
//      </Box>

  
// {/* <form>

// <MDBInput type="text"  label='Product name' value={product.name} onChange={handleChange}/>

// </form> */}


//         <Dialog open={open} onClose={handleClickClose}>
//             <DialogTitle>New Product</DialogTitle>
//             <DialogContent>
//                 <input placeholder="name" name="name" value={product.name} onChange={handleChange}/> <br/>
//                 <input placeholder="price" name="price" value={product.price} onChange={handleChange}/> <br/>
//                 <input placeholder="seller" name="seller" value={product.seller} onChange={handleChange}/> <br/>
//                 <input placeholder="description" name="description" value={product.description} onChange={handleChange}/> <br/>
//                 <input placeholder="qantity" name="quantity" value={product.quantity} onChange={handleChange}/> <br/>
//             </DialogContent>
//             <DialogActions>
//                 <Button  onClick={handleClickClose}>Cancel</Button>
//                 <Button onClick={handleSave}>Save</Button>
//             </DialogActions>

//         </Dialog>
//      </div>


  )
}

export default AddProduct