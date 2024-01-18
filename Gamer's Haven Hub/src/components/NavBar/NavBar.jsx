import { useEffect, useState } from 'react'
import './navBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from 'react-router-dom'
import {db} from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, orderBy, QuerySnapshot } from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc =>{
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                setCategories(categoriesAdapted)

            })
    },[])


    return (
        <nav className='header'>  
            <Link className='nombrePagina' to='/'><h1> Gamer's Haven Hub</h1></Link>
            <section className='categorias'>
                {
                    categories.map(cat => {
                        return <Link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>
                    })
                }

                {/* <Link to='/category/consolas'>Consolas</Link>
                <Link to='/category/videojuegos'>Videojuegos</Link>
                <Link to='/category/accesorios'>Accesorios</Link> */}
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar