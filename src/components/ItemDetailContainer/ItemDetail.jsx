

const ItemDetail = ({product}) => {
return (
    <div className="itemdetail" style={{display:"flex"}}>
        <img src={product.image} alt="" width={400} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
    </div>
)
}

export default ItemDetail