import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({dataItem}) =>{
    const [quantitySelected, setQuantitySelected] = useState (0)
    const {title,price,img,stock,description} = dataItem 
    const {addToCart} = useContext (CartContext)
    

    return(
        <div className='ItemDetailContainer'>
        <div className='itemDetailDivImg'><img className='itemDetailImg' src={img} alt='Vela'></img></div>
        <div className="ItemDetailDiv">
            <h2>{title}</h2>
            <span className='spanDetailPrice'>${price}</span>
            <p>Envio gratis a partir de $10000</p>
            <p>{description}</p>
            {console.log(quantitySelected)}
            {
                quantitySelected >= 1 ? <Link to="/cart"><button onClick={()=>{addToCart({...dataItem, quantitySelected})}} className='botonTerminarCompra'>Terminar Compra</button></Link>:<ItemCount stock={stock}setQuantitySelected={setQuantitySelected}/>
            }
        </div> 
        </div>
    )
}

export default ItemDetail