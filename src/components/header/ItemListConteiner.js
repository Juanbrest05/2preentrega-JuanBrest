import { Link } from "react-router-dom";


const ItemListConteiner = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Zapatillas"> {props.itemUno}</Link>
            </li>
            <li>
                <Link to="category/Camperas"> {props.itemDos}</Link>
            </li>
            <li>
            <Link to="category/Remeras"> {props.itemTres}</Link>
            </li>
           
        </ul>
    )
}
export default ItemListConteiner;