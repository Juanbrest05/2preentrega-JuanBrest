import ItemListConteiner from "./ItemListConteiner"
import Brand from "./brand"
import CartWidget from "./Cartwidget";

const NavBar = () => {
    return (
        <header>
            <div className="conteinerBrand">
                 <Brand/>
            </div>

            <nav className="conteinerItemList">
             <ItemListConteiner
             itemUno = "Zapatillas"
             itemDos = "Camperas"
             itemTres = "Remeras"
             
             />
            </nav>

            <div className="conteinerCart">
           <CartWidget/>
            </div>
        </header>
    )
}
export default NavBar