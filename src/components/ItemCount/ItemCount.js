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
                    <p>Seleccione la cantidad</p>
                    <div className='div-btn-count'>
                         <button className='btn-count' onClick={removeProduct} disabled={disable}><span className='spanCountRest'>-</span></button>
                         <p className='pCount'>{count}</p>
                         <button className='btn-count' onClick={addProduct} disabled={disable}><span className='spanCountAdd'>+</span></button>
                    </div>
               </div>
               <button className='botonAgregarCarrito' onClick={onAdd}>Agregar a carrito</button>
               </>:<><Link to='/products' className='linkCount'><button className='botonAgregarCarrito'>Seguir Comprando</button></Link><Link to='/cart' className='linkCount'><button className='botonAgregarCarrito'>Terminar Compra</button></Link></>}
          </div>
     )
}         
export default ItemCount