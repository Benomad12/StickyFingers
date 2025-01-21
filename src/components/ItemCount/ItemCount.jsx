import { useState } from "react"
import './count.css'

const ItemCount = ({Stock, AddProductInCart}) => {
const [ count, setCount] = useState (1)

const handleClickRemove = () => {
    if(count >1){setCount(count -1 )}
}

const handleClickAdd = () => {
    if (count < Stock){setCount(count + 1 )}
}

return (
    <div className="containercount1rem">
        <button className="minusbutton" onClick={handleClickRemove} >-</button>
        <p>{count}</p>
        <button className="plusbutton" onClick={handleClickAdd} >+</button>
        <button className="addproductbutton" onClick={()=> AddProductInCart(count)}>add product</button>
    </div> 
)
}

export default ItemCount