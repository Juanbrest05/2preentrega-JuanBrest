import brand from "../images/brand.jpg"
import { Link } from "react-router-dom";

const Brand = () => {
    return(
        <Link to="/">
        <img src={brand} alt="Tienda Hard" title="Tienda Hard"></img>
        </Link>

    )
}
export default Brand;