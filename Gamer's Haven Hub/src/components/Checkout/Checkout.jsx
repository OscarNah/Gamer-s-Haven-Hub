import { useState } from "react";
import "./checkout.css";
import { useCart } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);

  const { cart, total, clearCart } = useCart();

  const { register, handleSubmit } = useForm();

  const createOrder = async (userData) => {
    const objOrder = {
      buyer: {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
      },
      items: cart,
      total,
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    const ids = cart.map((prod) => prod.id);

    if (ids.length === 0) {
      // Manejar el caso en que el carrito esté vacío
      console.error("El carrito está vacío. No se puede realizar la consulta.");
      return;
    }

    const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids));

    // getDocs(productsCollection).then(documentSnapshot => console.log(documentSnapshot))

    const { docs } = await getDocs(productsCollection);

    docs.forEach((doc) => {
      const dataDoc = doc.data();
      const stockDb = dataDoc.stock;

      const productAddedToCart = cart.find((prod) => prod.id === doc.id);
      const prodQuantity = productAddedToCart?.quantity;

      if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...dataDoc });
      }
    });

    if (outOfStock.length === 0) {
      batch.commit();

      const ordersCollecction = collection(db, "orders");

      const { id } = await addDoc(ordersCollecction, objOrder);

      clearCart();
      setOrderId(id);
    } else {
      //notificacion pendiente
    }
  };

  if (orderId) {
    return (
      <>
      <div className="cont">
        <h1 className="ordenId"> El ID de su orden es: {orderId} </h1>
        <button className="buttonRegresar">
          <Link className="linkStyle" to={"/"}>Regresar a inicio</Link>
        </button>
      </div>
      </>
    );
  }

  return (
    <>
      <h1 className="tituloCheckout">Checkout</h1>
      <div className="bg">
        <h1 className="formH1"> Promorcionanos tus datos de contacto </h1>
        <form onSubmit={handleSubmit(createOrder)}>
          <input type="text" placeholder="Ingresa tu nombre" {...register("name")} />
          <input type="phone" placeholder="Ingresa tu numero de telefono" {...register("phone")} />
          <input type="email" placeholder="Ingresa tu correo electronico" {...register("email")} />

          <button className="checkoutBoton" type="submit">
            Generar orden
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
