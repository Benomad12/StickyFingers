
const Item = ({products}) => {
return (
<div className="item">
    <img className="imagee" src={products.image} width={200} alt="" />
    <p>{products.name}</p>
    <p>precio: {products.Price}</p>
</div>
)
}

export default Item