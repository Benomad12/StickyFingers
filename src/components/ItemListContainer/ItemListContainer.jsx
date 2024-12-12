import { useState, useEffect } from "react";
import { GetProducts } from "../../data/data";
import ItemList from "./ItemList";
import Item from "./Item";
import "./itemlistcontainer.css"


const ItemListContainer = ({greeting}) => {
const [products, setProducts] = useState ([])

useEffect(()=>{
    GetProducts()
    .then((data)=>{
        setProducts (data)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{ 
        console.log("termino la promesa");
        })
}, [])

        return (
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
        )
    }

export default ItemListContainer