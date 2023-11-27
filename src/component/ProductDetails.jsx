// Product List 

import { useEffect, useState } from "react"
import Product from "./Product"
// import AddProduct from "./AddProduct"




const ProductDetails = () => {
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)
   
    useEffect(()=>{fetchData();
    },[])

    async function fetchData() {
      const response = await fetch('http://localhost:9090/api/v1/product');
      const res = await response.json();
      setProduct(res) 
      setLoading(false) 
      
    }

// function for adding new product

// const addProduct =async (product) => {
//   try {
//     const res = await fetch(SERVER_URL,{method:'Post',headers:{'Content-Type':'application/json'},
//    body:JSON.stringify(product)})
//    if(!res.ok){
//     throw new Error(" Unable to add product")
//    }
//    await fetchData()

//   } catch (error) {
//     console.log(error);
    
//   }
// }



 
//     async function fetchData(){
//         fetch('http://localhost:9090/api/v1/product', {mode:'no-cors'}).then((res)=>{
// console.log(res.json()) 
//         }).catch((er)=> 
//         console.log(er))
        // const res = await data.json()
        // 
        // setProduct(res.data)
    


  
    

  return (
    <>
    {/* <AddProduct addProduct={addProduct}/> */}
    <div className='card-countainer'>
        {loading ? (<div>Loading....</div>) :(product.map((p)=>(
            <Product key={p.id} val={p} />
        )))}

    </div>
    </>
  )
}

export default ProductDetails 