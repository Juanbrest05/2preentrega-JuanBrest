import Image from "./Image";
import '../../cardItem.css';
import Description from "./Description";
import Buttondetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCard";
import { Link } from "react-router-dom";

const CardItem = (props) => {
return(
    <div className ="cardItems">
      <Image imagen={props.img}/>
      <Description 
      title={props.name}
      stock = {props.stock}
      price = {props.price}
      />
      <div className="buttons">
        <ButtonAddCart/>
        <Link to={ `/item/${props.id}`}>
                    <Buttondetalles
                        txt="Ver detalles" 
                    />
                </Link>
      </div>
    </div>
)
}
export default CardItem;