import './ItemProduct.scss'

const ItemProduct = ({title,price,img}) => {
    return(
        <div className='itemProduct'>
            <img className='imgProduct' src={img} alt="Imagen Producto"/>
            <p>{title}</p>
            <span>${price}</span>
            <button>Comprar</button>
        </div>
    )  
}

export default ItemProduct