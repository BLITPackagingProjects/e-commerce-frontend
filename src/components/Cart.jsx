import { useState } from "react"
import ProductDisplay from "./ProductDisplay"

const Cart = () => {
    let [order, setOrder] = useState()
    let [products,setProducts] = useState([])
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
    axios.get(`http://localhost:9090/api/v1/ecommerce/order/active/${localStorage.getItem('id')}`,config).then(
        (res)=>{
            setOrder(res.data)
            axios.get(`http://localhost:9090/api/v1/product/order/${order.order_id}`,config).then((res)=>setProducts(res.data))
        })


    return (
    <div>
        <h1>Cart</h1>
        <ProductDisplay val={products} />
    </div>
  )
}

export default Cart