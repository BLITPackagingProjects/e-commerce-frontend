import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import OrderDisplay from './OrderDisplay'

const OrdersHistoryOfCustomer = () => {

  const url = `http://localhost:9090/api/v1/ecommerce/order/user/${localStorage.getItem('id')}`

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
})
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

export default OrdersHistoryOfCustomer
