import { Link } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () =>{
    return(
        <div className='container' >
            <div className='mainContainer'>
                <h1>Deco Desing</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, accusamus officia? Reiciendis doloribus, consequatur ratione provident sed nihil incidunt qui aliquam veniam? Ab beatae maiores, vero saepe nemo nostrum perspiciatis?</p>
                <ItemListContainer section="Productos"/>
            </div>
        </div> 
    )
}

export default Home

