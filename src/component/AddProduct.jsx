import { Button } from "@mui/base";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react"




const AddProduct = (props) => {

    const [open,setOpen] = useState(false)
    const [product,setProduct] = useState({
        name:'',
        price:'',
        seller:'',
        description:'',
        quantity:''
    });

    //opening new product form 
    const handleClickOpen =()=>{
        setOpen(true)
    }

    //closing new product form 
    const handleClickClose =()=>{
        setOpen(false)
    }

    // handle changes in form 
    const handleChange =(event)=>{
        setProduct({...product,[event.target.name]:event.target.value})
    }

    // saving new product details
    const handleSave =()=>{
        props.addProduct(product);
        handleClickClose();
    }




  return (
    <div> 
        <Box m={1} 
        display='flex'
        justifyContent='center'
        alignItems='center'>
            <Button onClick={handleClickOpen}>New Product Registration Form</Button>

        </Box>
        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>New Product</DialogTitle>
            <DialogContent>
                <input placeholder="name" name="name" value={product.name} onChange={handleChange}/> <br/>
                <input placeholder="price" name="price" value={product.price} onChange={handleChange}/> <br/>
                <input placeholder="seller" name="seller" value={product.seller} onChange={handleChange}/> <br/>
                <input placeholder="description" name="description" value={product.description} onChange={handleChange}/> <br/>
                <input placeholder="qantity" name="quantity" value={product.quantity} onChange={handleChange}/> <br/>
            </DialogContent>
            <DialogActions>
                <Button  onClick={handleClickClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>

        </Dialog>
     </div>
  )
}

export default AddProduct