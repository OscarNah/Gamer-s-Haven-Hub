import { Link } from "react-router-dom"
import './item.css'
const Item = ({id, price, name, img}) =>{
    return(
        <div className="producto">
            <h2>{name}</h2>
            <img src={img}/>
            <h4 style={{margin:'0px'}}>Precio: {price} MXM</h4>
            <Link className="ver-mas" to={`/detail/${id}`}>Ver detalles</Link>
        </div>
    )
}
export default Item
