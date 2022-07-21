import './ItemProduct.scss'
import {useState} from 'react'

const ItemProduct = ({data}) => {
    const [count, setCount] = useState(1)
    const {title,price,img,stock} = data
    const addNumber = () =>{
        setCount(count+1)
    }
    const removeNumber = ()=>{
        setCount(count-1)
    }
    return(
        <div className='itemProduct'>
            <img className='imgProduct' src={img} alt="Imagen Producto"/>
            <p>{title}</p>
            <span>${price}</span>
            <div className='itemCount'>
                <button onClick={removeNumber}>-</button>
                <p>{count}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button>Comprar</button>
        </div>
    )  
}

export default ItemProduct