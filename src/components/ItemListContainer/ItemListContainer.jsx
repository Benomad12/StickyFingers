import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data, useParams } from "react-router-dom";
import{collection, getDocs} from "firebase/firestore"
import db from "../../db/db.js";
import "./itemlistcontainer.css"


const ItemListContainer = ({greeting}) => {
const [products, setProducts] = useState ([])

const {idCategory} = useParams()



const collectionName = collection(db, "products")

const getProducts = async()=> {
    try{
        const dataDb= await getDocs(collectionName)
        
        const data = dataDb.docs.map((productDb)=> {
            return{id: productDb.id, ...productDb.data()}
})
    setProducts(data)
} 
catch (error){
        console.log(error)}
    }




useEffect(()=>{
    getProducts()
}, [idCategory])

        return (
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
        )
    }

export default ItemListContainer