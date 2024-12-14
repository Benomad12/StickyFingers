import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { GetProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
const [product, setProduct]= useState({})

const {idProduct}= useParams()




useEffect(()=>{
    GetProducts()
    .then((data)=> {
        const productFind = data.find((dataProduct)=> dataProduct.id === idProduct)
        setProduct(productFind)
        
    })

}, [idProduct])


    return (
    <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer