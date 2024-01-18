import React from 'react'
import './cartWidget.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div>
      <Link to="/cart" className='cartLink'>
        <button className='botonCarrito' style={{color: 'white', fontSize: '1.30rem', display: totalQuantity > 0 ? "block" : "none"}}>
          <FaShoppingCart/> { totalQuantity }
        </button>
      </Link>
    </div>
  );
}

export default CartWidget
