import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './itemDetail.css'


const ItemDetail = ({product}) => {
    const {addProduct} = useContext(CartContext)

const AddProductInCart = (count)=>{
    const productCart = {...product, quantity: count }

    addProduct(productCart)
    
} 

return (
    <div className="itemdetail" style={{display:"flex"}}>
        <img src={product.image} alt="" className="img" width={600} />
        <h2 className="productname">{product.name}</h2>
        <p className="description">{product.description}</p>
        <p>precio: ${product.Price}</p>
    <ItemCount Stock={product.Stock} AddProductInCart={AddProductInCart}/>
    </div>
)
}

export default ItemDetail