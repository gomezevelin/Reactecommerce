import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"


const ItemProduct = ({data}) => {
    
    const {id,title,price,img,stock} = data
    
    return(
        <Link className='cartLink' to={`/products/${id}`}>
        <div  key= {id} className='itemProduct'>
            <img className='imgProduct' src={img} alt="Imagen Producto"/>
            <p>{title}</p>
            <span>${price}</span>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </div>
        </Link>
        
    )  
}

export default ItemProduct