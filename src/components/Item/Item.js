import './Item.scss'
import ItemCount from '../ItemCount/ItemCount'


const ItemProduct = ({data}) => {
    
    const {title,price,img,stock} = data
    
    return(
    
        <div  key= "div" className='itemProduct'>
            <img className='imgProduct' src={img} alt="Imagen Producto" key={img}/>
            <p key={title}>{title}</p>
            <span key={price}>${price}</span>
            <ItemCount stock={stock}/>
            <button key="button">Comprar</button>
        </div>
        
    )  
}

export default ItemProduct