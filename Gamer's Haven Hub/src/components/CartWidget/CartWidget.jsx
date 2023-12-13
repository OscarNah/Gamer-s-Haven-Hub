import React from 'react'
import './cartWidget.css'
import cart from '../../assets/cartWidget.svg'
const CartWidget = () => {
  return (
    <div>
        <img className='carrito' src={cart}/>
        0
    </div>
  )
}

export default CartWidget