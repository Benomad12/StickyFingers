
const Item = ({products}) => {
return (
<div className="item">
    <img className="imagee" src={products.image} width={200} alt="" />
    <p>{products.name}</p>
    <p>Precio: {products.Price}</p>
    <p>Stock: {products.Stock}</p>
</div>
)
}

export default Item