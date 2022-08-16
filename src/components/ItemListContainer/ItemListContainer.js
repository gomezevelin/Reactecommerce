import './ItemListContainer.scss'
import ItemList from '../ItemList.js/ItemList'
import products from '../../utils/products.mock'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({section, sale}) => {
    
    const [listProducts, setListProducts] = useState([])
    const {category} = useParams()
    const filterByCategory = products.filter(product => product.category === category)
    const filterBySale = products.filter(product => product.sale === true)
    
    const getProducts = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (category){
                resolve(filterByCategory)
            }else{ 
                if (sale){
                    resolve(filterBySale)
                    //filtrar productos por sale
                }else
                resolve (products)
            }
        },1)
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
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer