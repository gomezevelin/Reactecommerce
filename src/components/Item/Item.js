import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'


const ItemProduct = ({data}) => {
    
    const {id,title,price,img,stock} = data
    
    return(
    
        <div  key= {id} className='itemProduct'>
            <img className='imgProduct' src={img} alt="Imagen Producto"/>
            <p>{title}</p>
            <span>${price}</span>
            <ItemCount stock={stock}/>
            <button>Comprar</button>
        </div>
        
    )  
}

export default ItemProduct