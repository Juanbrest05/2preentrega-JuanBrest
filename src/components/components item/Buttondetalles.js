import { Link } from "react-router-dom";
import DetailsItem from "./DetailItem";


const Buttondetalles = (props) => {
    return(
        <button 
        id="detalles" 
    >{props.txt}</button>
    )
}
export default Buttondetalles;