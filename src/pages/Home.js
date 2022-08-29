import "./pages.scss";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
//import { useContext } from "react"
//import { CartContext } from "../Context/CartContext"

const Home = () => {
  return (
    <>
        <div className="sectionHome">
            <h1 className="titleHome">Deco Desing</h1>
            <img className="imgHome" src="./assets/decoHome.jpeg" alt="casa decoracion"></img>
            <p className="pHome">
                Productos de decoración exclusivos para toda tu casa.
            </p>
        </div>
        <div>
            <ItemListContainer section="Ofertas de la semana" sale="true" />
        </div>
    </>
  );
};
export default Home;
