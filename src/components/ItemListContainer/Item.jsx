import { Link } from "react-router-dom"



const Item = ({products}) => {
return (
<div className="item">
    <img className="imagee" src={products.image} width={200} alt="" />
    <p>{products.name}</p>
    <p>Precio: {products.Price}</p>
    <p>Stock: {products.Stock}</p>
    <Link to={ "/detail/"+  products.id }>Ver Detalle</Link>
</div>
)
}

export default Item