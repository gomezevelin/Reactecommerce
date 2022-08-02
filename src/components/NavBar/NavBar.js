import CardWidget from './CartWidget';
import './NavBar.scss';
import {Link} from "react-router-dom"



const NavBar = ()=>{
    return(
        <div className='navBar'>
            <Link to="/"><img src='assets/logohome.png' className='logoNav' alt ='Logo'/></Link>
            <ul>
                <Link to="/"><li><button>Home</button></li></Link>
                <Link to="/products"><li><button>Productos</button></li></Link>
                <Link to="/contact"><li><button>Contacto</button></li></Link>
                <Link to="/checkout"><li><button><CardWidget/></button></li></Link>
            </ul>
        </div>    
    )
}
export default NavBar;