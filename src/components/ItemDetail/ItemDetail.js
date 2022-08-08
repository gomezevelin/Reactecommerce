import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({dataItem}) =>{
    const [quantitySelected, setQuantitySelected] = useState (1)
    const {title,price,img,stock,description} = dataItem
    const {id}= useParams()
    console.log(useParams)

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
                quantitySelected > 1 ? <Link to="/cart"><button className='botonTerminarCompra'>Terminar Compra</button></Link>  : <ItemCount stock={stock} setQuantitySelected={setQuantitySelected}/>
            }
        </div>
        </div>
    )
}

export default ItemDetail