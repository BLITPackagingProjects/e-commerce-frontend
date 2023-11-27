import { useState } from "react";
import AddProduct from "./AddProduct"


const ProductRegistrationForm = () => {

    const [setProduct] = useState([])
    const [setLoading] = useState(true)
   

    async function fetchData() {
      const response = await fetch('http://localhost:9090/api/v1/product');
      const res = await response.json();
      setProduct(res) 
      setLoading(false) 
      
    }

// function for adding new product

const addProduct =async (product) => {
  try {
    const res = await fetch('http://localhost:9090/api/v1/product',{method:'Post',headers:{'Content-Type':'application/json'},
   body:JSON.stringify(product)})
   if(!res.ok){
    throw new Error(" Unable to add product")
   }
   await fetchData()

  } catch (error) {
    console.log(error);
    
  }
}


  return (
    <div>
        <AddProduct addProduct={addProduct}/>
    </div>
  )
}

export default ProductRegistrationForm