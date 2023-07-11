import cart from "../images/cart.jpg"

const Cartwidget =() => {
    return(
        <div className="containerLenght">
            <img className="pepe" src={cart} alt="Carrito"></img>
            <span className="cantCard" >
                1
            </span>
        </div>

    )
}
export default Cartwidget