import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from "react-router-dom"


const ItemProduct = ({data}) => {
    
    const {id,title,price,img,stock} = data
    
    return(
        
        <div  key= {id} className='itemProduct'>
            <Link className='cartLink' to={`/items/${id}`}>
                <img className='imgProduct' src={img} alt="Imagen Producto"/>
                <p>{title}</p>
            </Link>
            <span>${price}</span>
            <ItemCount stock={stock}/>
            <Link className='cartLink' to={`/items/${id}`}>
            <button>Mostrar Detalle</button></Link>
        </div>
    )  
}

export default ItemProduct