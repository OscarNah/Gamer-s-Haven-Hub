import './itemListContainer.css'
import { useEffect, useState } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{
      const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
      
      getDocs(collectionRef)
      .then(querySnapshot =>{
        console.log(querySnapshot)

        const productsAdapted = querySnapshot.docs.map(doc=>{
          const fields = doc.data()
          return {id: doc.id, ...fields }
        })

        setProducts(productsAdapted);
      })
      // Usando AsyncMock
      // const asyncFuntion = categoryId ? getProductsByCategory : getProducts

      // asyncFuntion(categoryId)
      //   .then(response =>{
      //       setProducts(response)
        // })
    }, [categoryId])


  return (
    <div>
        <h1 className="tituloCategoria">{greetings}</h1>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer