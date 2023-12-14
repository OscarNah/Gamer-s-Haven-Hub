import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
const CartWidget = () => {
  return (
    <div>
      <h1 style={{color: 'white', fontSize: '1.25rem'}}><FaShoppingCart/>0</h1>
    </div>
  )
}

export default CartWidget