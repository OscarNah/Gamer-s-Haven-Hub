import './itemListContainer.css'
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
      const asyncFuntion = categoryId ? getProductsByCategory : getProducts

      asyncFuntion(categoryId)
        .then(response =>{
            setProducts(response)
        })
    }, [categoryId])


  return (
    <div>
        <h1 className="tituloCategoria">{greetings}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer