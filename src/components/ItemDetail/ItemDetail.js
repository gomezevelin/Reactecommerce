import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import {BsGeoAlt} from "react-icons/bs";
import { Link } from 'react-router-dom';


const ItemDetail = ({dataItem}) =>{
    const {title,price,img,stock,description,category} = dataItem 
    return(
        <>
        <div className='ItemDetailContainer'>
        <div className='itemDetailDivImg'><img className='itemDetailImg' src={`/assets/${img}`} alt='Vela'></img></div>
        <div className="ItemDetailDiv">
            <h2 className='titleItem'>{title}</h2>
            <span className='spanDetailPrice'>${price}</span>
            <p>Decoración original e innovadora para tu hogar</p>
            <p className='pIcon'><BsGeoAlt className="iconFooter"/> Retiro por sucursal</p>
            <h4 className='subtitleItem'>Descripción:</h4>
            <p>{description}</p>
            
            <Link to={`/category/${category}`} className='linkCount'><button className='btn-mas'>Descubrí más {category}</button></Link>    
        </div>
        </div>
        <ItemCount stock={stock} dataItem={dataItem}/>
        </>
    )
}

export default ItemDetail