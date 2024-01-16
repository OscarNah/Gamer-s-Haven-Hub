import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({id, name, category, img, stock, price, description }) => {
  
  //const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        //setQuantityAdded(count)
        const item ={
            id, name, price, quantity
        }
        addItem(item);
        console.log(`agregue al carrito:`, quantity);

    }

  return (
    <div className="productoDetalle">
      <div className="product-card">
        <img src={img} />
        <div className="product-details">
          <h1>{name}</h1>
          <ul>
            <li>Categoria: {category}</li>
            <li>Precio: ${price}</li>
            <li>Descripcion: {description}</li>
          </ul>
          <footer>
            {
              !isInCart(id) ? (
                <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)} />
            ) : (
              <button><Link to="/cart" className="buttonLink">Finalizar compra</Link></button>
              
              )
            }
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
