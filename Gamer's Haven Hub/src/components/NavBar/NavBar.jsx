import './navBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='header'>  
            <Link className='nombrePagina' to='/'><h1> Gamer's Haven Hub</h1></Link>
            <section className='categorias'>
                <Link to='/category/consolas'>Consolas</Link>
                <Link to='/category/videojuegos'>Videojuegos</Link>
                <Link to='/category/accesorios'>Accesorios</Link>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar