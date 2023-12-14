import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, category, img, stock, price, description }) => {
  return (
    <div className="productoDetalle">
      <div class="product-card">
        <img src={img} />
        <div class="product-details">
          <h1>{name}</h1>
          <ul>
            <li>Categoria: {category}</li>
            <li>Precio: ${price}</li>
            <li>Descripcion: {description}</li>
            <li><ItemCount stock={stock}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
