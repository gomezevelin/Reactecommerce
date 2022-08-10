import './ItemCount.scss'
import {useState} from 'react'           

const ItemCount = ({stock, setQuantitySelected}) => {
     
     let stockVirtual = stock
     let disable= false
     const [count, setCount] = useState(1)
     const addProduct = () => count <stockVirtual ? setCount(count+1) : disable =true
     const removeProduct = ()=> count > 1 ? setCount(count-1) : disable=true
     const addToCart = () => {setQuantitySelected(count)}
     return(   
          <div className='divItemCount'>
               <div className='itemCount'>
                    <button onClick={removeProduct} disabled={disable}>-</button>
                    <p>{count}</p>
                    <button onClick={addProduct} disabled={disable}>+</button>
               </div>
               <button className='botonAgregarCarrito' onClick={addToCart}>Agregar a carrito</button>
          </div>
     )
}         

export default ItemCount