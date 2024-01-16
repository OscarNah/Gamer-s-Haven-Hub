import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({id, name, category, img, stock, price, description }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (count) => {
        setQuantityAdded(count)
        const item ={
            id,name,price
        }
        console.log(item);
        console.log(`agregue al carrito:`, count);

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
              quantityAdded === 0 ? (
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
