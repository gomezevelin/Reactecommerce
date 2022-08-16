import './ItemCount.scss'
import {useContext,useState} from 'react'
import { CartContext } from '../../Context/CartContext'  
import { Link } from 'react-router-dom'       

const ItemCount = ({stock, dataItem}) => {
     const {addToCart} = useContext(CartContext)
     let stockVirtual = stock
     let disable= false
     const [count, setCount] = useState(1)
     const [terminarCompra,setTerminarCompra ] = useState(false);
     const addProduct = () => count <stockVirtual ? setCount(count+1) : disable =true
     const removeProduct = ()=> count > 1 ? setCount(count-1) : disable=true
     const onAdd = () => {addToCart ({...dataItem, quantitySelected:count}) 
     setTerminarCompra (true)}
     return(   
          <div className='divItemCount'>
               
               {!terminarCompra ?
               <>
               <div className='itemCount'>
               <button onClick={removeProduct} disabled={disable}>-</button>
               <p>{count}</p>
               <button onClick={addProduct} disabled={disable}>+</button>
          </div>
               <button className='botonAgregarCarrito' onClick={onAdd}>Agregar a carrito</button></>:<><Link to='/cart'><button className='botonAgregarCarrito'>Terminar Compra</button></Link>
               <Link to='/products'><button className='botonAgregarCarrito'>Seguir Comprando</button></Link></>}
          </div>
     )
}         

export default ItemCount