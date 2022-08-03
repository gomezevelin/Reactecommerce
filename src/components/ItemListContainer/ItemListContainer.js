import './ItemListContainer.scss'
import ItemList from '../ItemList.js/ItemList'
import products from '../../utils/products.mock'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ListContainer = ({section, categoryParam}) => {
    
    const [ListProducts, setListProducts] = useState([])
    const {category} = useParams()
    const filterByCategory = products.filter(product => product.category === category)
    

    const getProducts = new Promise((resolve,reject)=>{
        setTimeout(()=>{
    
            if (categoryParam === ""){
                resolve (products)
            }else{ 
                resolve(filterByCategory)
            }
        },2000)
    })
    useEffect(()=>{
    getProducts
        .then((res)=>{
        setListProducts(res)})
        .catch((error)=>{
        console.log("hubo un problema")})
    },[filterByCategory])// eslint-disable-line react-hooks/exhaustive-deps
    
    
   
    return(
        <div className='ContainerlistProducts'>
            <h1>{section}</h1> 
            <ItemList dataProducts={ListProducts}/>
        </div>
    )
}

export default ListContainer

