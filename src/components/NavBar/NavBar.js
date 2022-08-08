import CardWidget from './CartWidget';
import './NavBar.scss';
import {Link} from "react-router-dom"
import ButtonDrop from '../Button Dropdown/buttonDrop';



const NavBar1 = ()=>{
    return(
        <div className='navBar'>
            <Link to="/"><img src='assets/logohome.png' className='logoNav' alt ='Logo'/></Link>
            <ul>
                <Link to="/"><li><button>Home</button></li></Link>
                <ButtonDrop/>
                <Link to="/contact"><li><button>Contacto</button></li></Link>
                <Link to="/cart"><li><button><CardWidget/></button></li></Link>
            </ul>
        </div>    
    )
}
export default NavBar1;