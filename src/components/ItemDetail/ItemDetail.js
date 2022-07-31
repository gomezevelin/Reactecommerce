import './ItemDetail.scss'

const ItemDetail = ({dataItem}) =>{
    const {id,title,price,img,stock,description} = dataItem

    return(
        <div className='ItemDetailDiv'>
        <div className='itemDetailDivImg'><img className='itemDetailImg' src={img} alt='Vela'></img></div>
        <div>
            <h2>{title}</h2>
            <span>{price}</span>
            <p>Envio gratis a partir de $10000</p>
            <p>{description}</p>
            <div className='countDiv'>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemDetail