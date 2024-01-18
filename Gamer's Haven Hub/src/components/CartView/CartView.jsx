import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartView.css";
import { FaTrash } from "react-icons/fa";

const CartView = () => {
  const { cart, total, removeItem } = useCart();

  return (
    <>
      <h1 className="tituloCarrito"> CARRITO </h1>
      <div className="sizeCart">
      {cart.map((prod) => {
        return (
          <div className="carritoBg" key={prod.id}>
            <div className="cartProduct">
              <div style={{textAlign:'center'}}>
                <p className="indice">Producto:</p>
                <h3 >{prod.name}</h3>
              </div>
              <div style={{textAlign:'center'}}>
                <p className="indice">Cantidad: </p>
                <h3 style={{textAlign:'center'}}>{prod.quantity}</h3>
              </div>
              <div style={{textAlign:'center'}}>
                <p className="indice">Precio: </p>
                <h3>$ {prod.price}</h3>
              </div>
              <div style={{textAlign:'center'}}>
                <p className="indice">Subtotal: </p>
                <h3>${prod.quantity * prod.price} </h3>
              </div>
              <button className="borrarProducto" style={{ fontSize: "1.3rem" }} onClick={() => removeItem(prod.id)}>
                {" "}
                <FaTrash />{" "}
              </button>
            </div>
          </div>
        );
      })}
      <div className="totalCompra">
        <button>
          <Link className="linkStyle" to="/checkout">
            Checkout{" "}
          </Link>
        </button>
        <h2> Total: ${total} </h2>
      </div>
      </div>
    </>
  );
};

export default CartView;

{
  /* <img src={prod.img} alt={prod.name} />           No se muestra la imagen :c*/
}
