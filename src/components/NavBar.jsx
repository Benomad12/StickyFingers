import Cartwidget from "./Cartwidget"
import './navbar.css'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
<div class="padre">
    <Link to='/' className="title">
        <p className="h1">Sticky Finger</p>
    </Link>
        <div class="carwidget"><Cartwidget/></div>
            <nav className='navbar'>
                <ul className="categories">
                    <Link to="Category/Guitar" className="Category">Guitars</Link>
                    <Link to="Category/Drums" className="Category">Drums</Link>
                    <Link to="Category/Dj-Controller" className="Category">Dj-Equipament</Link>
                    <Link to="Category/Headphones" className="Category">Headphones</Link>
                </ul>
            </nav>
</div>
)
}

export default NavBar