import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({dataItem}) =>{
    const {id,title,price,img,stock,description} = dataItem

    return(
        <div className='ItemDetailContainer'>
        <div className='itemDetailDivImg'><img className='itemDetailImg' src={img} alt='Vela'></img></div>
        <div className="ItemDetailDiv">
            <h2>{title}</h2>
            <span className='spanDetailPrice'>${price}</span>
            <p>Envio gratis a partir de $10000</p>
            <p>{description}</p>
            <ItemCount stock={stock}/>
            <button className='botonAgregarCarrito'>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemDetail