import './ItemListContainer.scss'
import ItemList from '../ItemList.js/ItemList'
import products from '../../utils/products.mock'
import {useState, useEffect} from 'react'

const ListContainer = ({section}) => {
    
    const [ListProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
        
    })
    useEffect(()=>{
    getProducts
        .then((res)=>{
        setListProducts(res)})
        .catch((error)=>{
        console.log("hubo un problema")})
    },[])
    
    
   
    return(
        <div className='ContainerlistProducts'>
            <h1>{section}</h1> 
            <ItemList dataProducts={ListProducts}/>
        </div>
    )
}

export default ListContainer

