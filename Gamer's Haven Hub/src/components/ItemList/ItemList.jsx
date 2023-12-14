import Item from "../Item/Item"
import './itemList.css'
const ItemList = ({products}) => {
    return (
        <div className="productos">
            {products.map(prod => {
                    return <Item key={prod.id} {...prod}/>})
            }
        </div>
    )
}
export default ItemList
