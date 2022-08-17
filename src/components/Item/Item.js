import './Item.scss'
import {Link} from "react-router-dom"


const ItemProduct = ({data}) => {
    
    const {id,title,price,img,category} = data
    console.log(category)
    return(
        
        <div  key= {id} className='itemProduct'>
            <Link className='cartLink' to={`/${category}/${id}`}  >
                <img className='imgProduct' src={`/assets/${img}`} alt="Imagen Producto"/>
                <p>{title}</p>
            </Link>
            <span>${price}</span>
            <Link to={`/${category}/${id}`}><button>Ver más</button></Link>
        </div>
    )  
}

export default ItemProduct