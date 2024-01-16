import React from 'react'
import './cartWidget.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useCart()
  return (
    <div>
      <button className='botonCarrito' style={{color: 'white', fontSize: '1.30rem'}}><FaShoppingCart/> {totalQuantity} </button>
    </div>
  )
}

export default CartWidget