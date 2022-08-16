import './Item.scss'
import {Link} from "react-router-dom"


const ItemProduct = ({data}) => {
    
    const {id,title,price,img} = data
    
    return(
        
        <div  key= {id} className='itemProduct'>
            <Link className='cartLink' to={`/items/${id}`}  >
                <img className='imgProduct' src={img} alt="Imagen Producto"/>
                <p>{title}</p>
            </Link>
            <span>${price}</span>
            <Link to={`/items/${id}`}><button>Ver más</button></Link>
        </div>
    )  
}

export default ItemProduct