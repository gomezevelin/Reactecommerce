import CardWidget from './CartWidget';
import './NavBar.scss';
import {Link} from "react-router-dom"
import ButtonDrop from '../Button Dropdown/buttonDrop';


const NavBar1 = ()=>{
    return(
        <div className='navBar'>
            <Link to="/"><img src='assets/logohome.png' className='logoNav' alt ='Logo'/></Link>
            <ul>
                <Link to="/"><li><button className='btn-nav'>Home</button></li></Link>
                <ButtonDrop/>
                <Link to="/contact"><li><button className='btn-nav'>Contacto</button></li></Link>
                <li><button className='btn-nav'><CardWidget/></button></li>
            </ul>
        </div>    
    )
}
export default NavBar1;