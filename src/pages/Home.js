
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Home = () =>{

    
    return(
        
            <div>
                <h1>Deco Desing</h1>
                <img src="./assets/decoHome.jpeg" alt="casa decoracion"></img>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, accusamus officia? Reiciendis doloribus, consequatur ratione provident sed nihil incidunt qui aliquam veniam? Ab beatae maiores, vero saepe nemo nostrum perspiciatis?</p>
                <ItemListContainer section="Ofertas de la semana" sale="true"/>
            </div>
    )
}
export default Home