import './NavBar.scss';

const NavBar = ()=>{
    return(
        <div className='navBar'>
            <img src='./assets/logo.png' className='logoNav' />
            <ul>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Contacto</button></li>
                <li><button>Carrito</button></li>
            </ul>
        </div>    
    )
}
export default NavBar;