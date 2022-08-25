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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
                accusamus officia? Reiciendis doloribus, consequatur ratione provident
                sed nihil incidunt qui aliquam veniam? Ab beatae maiores, vero saepe
                nemo nostrum perspiciatis?
            </p>
        </div>
        <div>
            <ItemListContainer section="Ofertas de la semana" sale="true" />
        </div>
    </>
  );
};
export default Home;
