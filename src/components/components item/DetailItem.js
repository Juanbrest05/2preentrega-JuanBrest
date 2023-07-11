import Image from "./Image";
import Description from "./Description";
import Buttondetalles from "./Buttondetalles";
import fetchSimulator from "./fetchSimulator";
import products from "./products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import '../../detailItem.css';


const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimulator(products.filter( filter => filter.id === idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                (datos.length === 0) ? <MoonLoader color="#5b00fb" /> 
                : datos.map( itemsId => (
                    <>
                        <div className="containerLeft">
                            <Image
                                img={itemsId.img}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    name= {itemsId.name}
                                    description= {itemsId.description}
                                    stock = {itemsId.stock}
                                    price={itemsId.price}
                                />
                                
                            <div className="buttons">
                        
                                    <Buttondetalles
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;