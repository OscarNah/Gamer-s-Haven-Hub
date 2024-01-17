import { useEffect, useState } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {productId} = useParams()


    useEffect(()=>{

        const documentRef = doc(db, 'products', productId)


        getDoc(documentRef)
        .then(queryDocumentSnapshot =>{
            console.log(queryDocumentSnapshot)
            const fields = queryDocumentSnapshot.data()
            const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
            setProduct(productAdapted)
        })
        //Usando AsyncMock
        // getProductById(productId)
        // .then(response =>{
        //     setProduct(response)
        // })
    }, [productId])
    return (
        <ItemDetail {...product}/>
    )
}
export default ItemDetailContainer