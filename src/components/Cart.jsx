import { useEffect, useState } from "react"
import ProductDisplay from "./ProductDisplay"
import axios from "axios"
import { MDBRow } from "mdb-react-ui-kit"
import Display from "./Display"

const Cart = () => {
    let [order, setOrder] = useState()
    let [products,setProducts] = useState([])
    let [btn, setBtn] = useState(false)
    const change = ()=>{
        setBtn(!btn)
        console.log(btn)
    }
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    const removeProducts = ()=>{
        //enter remove product from order code here 
        axios.get(`http://localhost:9090/api/v1/product/order/${order.order_id}`,config).then((res)=>setProducts(res.data))
    }


    async function fetchProducts(orderId){
        const res = await axios.get(`http://localhost:9090/api/v1/product/order/${orderId}`,config)
        const d = await res.data
        setProducts(d)
    }
    

    async function initPage(){
        await fetchProducts(localStorage.getItem("cartId"))
    }
    useEffect(()=>{
        initPage()
    },[btn])



    return (
    <div>
        
            <h1>Cart</h1>
            
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>

      {
        products.map((item)=>{
          return (
            
            <Display key={item.product_id} val={item} location="cart" change={change}/>
            
            )
          })
          
        }
        </MDBRow>
    </div>
  )
}

export default Cart