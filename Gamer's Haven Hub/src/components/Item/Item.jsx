import { Link } from "react-router-dom"
const Item = ({id, price, name, img}) =>{
    return(
        <div>
            <h3>{name}</h3>
            <img src={img} style={{width: 100}} />
            <h4>{price}</h4>
            <Link to={`/detail/${id}`}>Ver detalles</Link>
        </div>
    )
}

export default Item