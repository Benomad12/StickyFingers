import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'


const Cartwidget = () => {

    const { totalQuantity} = useContext (CartContext)



    return (
        <Link to="/Cart">
            <i class="bi bi-cart" style={{ fontSize: '24px', color: 'white' }}></i>
            <p style={{color: "white"}}>{totalQuantity()}</p>
        </Link>
    )
}

export default Cartwidget