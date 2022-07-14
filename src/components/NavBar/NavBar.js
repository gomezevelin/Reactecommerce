import './NavBar.scss';

const NavBar = ()=>{
    return(
        <div className='navBar'>
            <h1>Skulls and Devils</h1>
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