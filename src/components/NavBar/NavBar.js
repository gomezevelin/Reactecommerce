import CardWidget from './CartWidget';
import './NavBar.scss';



const NavBar = ()=>{
    return(
        <div className='navBar'>
            <img src='./assets/logo.png' className='logoNav' alt ='Logo'/>
            <ul>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Contacto</button></li>
                <li><button><CardWidget/></button></li>
            </ul>
        </div>    
    )
}
export default NavBar;