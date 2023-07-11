import CardItem from "./CardItem"
import fetchSimulator from "./fetchSimulator";
import products from "./products";
import { useEffect, useState } from "react";
import './../conteinerCardItem.css'
import { useParams } from "react-router-dom";
import Buttondetalles from "./Buttondetalles";
import MoonLoader from "react-spinners/MoonLoader";

const ConteinerCardItems = () => {
const[ datos ,setDatos ] =useState ( [] );
const {idCategory} =useParams();
useEffect(() =>{
    setDatos([]);
if  (idCategory == undefined){
    fetchSimulator(products, 3000)
    .then(resp => setDatos(resp))
    .catch(error =>console.log(error))
}else{
    fetchSimulator(products.filter(filter =>filter.category == idCategory), 3000)
    .then(resp => setDatos(resp))
    .catch(error =>console.log(error))
}
}, [idCategory])
    
return(
    <div className="containerCardItems">
        {
            (datos.length === 0 ) ? <div className="containerSpinner"> <MoonLoader color="#5b00fb" /> </div>
            : datos.map( product => (
                <CardItem 
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    stock={product.stock}
                    price={product.price}
                />  
            ))
        }
    </div>      
)
}

export default ConteinerCardItems;