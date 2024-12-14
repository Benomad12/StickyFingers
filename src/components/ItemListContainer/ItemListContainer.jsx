import { useState, useEffect } from "react";
import { GetProducts } from "../../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css"


const ItemListContainer = ({greeting}) => {
const [products, setProducts] = useState ([])

const {idCategory} = useParams()



useEffect(()=>{
    GetProducts()
    .then((data)=>{
        if(idCategory){
            const filterProducts = data.filter((product)=> product.Category === idCategory)
            setProducts (filterProducts)
        }else{
            setProducts (data)
        }
        
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{ 
        console.log("termino la promesa");
        })
}, [idCategory])

        return (
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
        )
    }

export default ItemListContainer