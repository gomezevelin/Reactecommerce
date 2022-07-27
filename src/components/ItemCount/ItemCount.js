 import './ItemCount.scss'
 import {useState} from 'react'           
            
  const ItemCount = ({stock}) => {
     let stockVirtual = stock
     let disable= false
     const [count, setCount] = useState(1)
     const addProduct = () => count <=stockVirtual ? setCount(count+1) : disable =true
     const removeProduct = ()=> count > 1 ? setCount(count-1) : disable=true
     return(   
          <div className='itemCount'>
               <button onClick={removeProduct} disabled={disable}>-</button>
               <p>{count}</p>
               <button onClick={addProduct} disabled={disable}>+</button>
          </div>
     )
   }         
        
export default ItemCount