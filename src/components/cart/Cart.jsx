import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const  Cart = () => {

    const {cart, totalPrice} = useContext (CartContext)


return (
    <div>
    <ul>
        {
            cart.map((productCart)=> (
                <li key={productCart.id} style={{display:"flex", margin: "2rem"}} >
                    <img src={productCart.image} width={100}  />
                    <p>{productCart.name}</p>
                    <p> Cantidad: {productCart.quantity}</p>
                    <p>precio €: {productCart.Price}</p>
                </li>
            ))
        }
    </ul>
    <h3>Precio Total: {totalPrice()}</h3>
    </div>
)
}

export default Cart
