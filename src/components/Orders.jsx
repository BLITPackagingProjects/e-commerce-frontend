import React from 'react'
import OrderHistory from './OrderHistory'
import OrdersHistoryOfCustomer from './OrdersHistoryOfCustomer'

const Orders = () => {
  return localStorage.getItem('type')==1?(
    <OrdersHistoryOfCustomer/>
  ):<OrderHistory/>
}

export default Orders
