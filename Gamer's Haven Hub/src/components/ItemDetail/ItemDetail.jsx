import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, category, img, stock, price, description }) => {
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
            <li><ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
