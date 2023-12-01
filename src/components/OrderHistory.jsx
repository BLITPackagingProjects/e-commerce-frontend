import React, { useState } from 'react'
import axios from 'axios'
import OrderDisplay from './OrderDisplay'
import { useEffect } from 'react'

const OrderHistory = () => {
    
const url = `http://localhost:9090/api/v1/ecommerce/order/orders`

const [orders, setOrders] = useState([])
let config = {
    method: 'get',
    maxBodyLength: Infinity,
    headers: { 
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

}; 

useEffect(()=>{

  axios.get(url,config).then((res)=>setOrders(res.data))
},[])


  return (
    <div>
   {
    orders.map((item)=>{
      return <OrderDisplay key={item.order_id} val={item}/>
    })
   }



    </div>
  )
}

export default OrderHistory
