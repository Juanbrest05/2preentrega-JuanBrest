import products from "./products";
import Image from "./Image";

const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="name">
                {props.name}
            </h3>
         

            <div className="description">
                <span className="descriptionTitle">Descripcion:</span>
                <p className="description">
                    {props.description}
                </p>
            </div>

            <span className="stock">
                Cantidad: {props.stock} unidades
            </span>

            <span className="price">
                ${props.price}
            </span>
        </div>
    )
}

export default Description;