import './ItemListContainer.scss'
import ItemList from '../ItemList.js/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemListContainer = ({section, sale}) => {
    
    const [listProducts, setListProducts] = useState([])
    const {category} = useParams()
    /*
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
    */
    useEffect(()=>{
        const queryCollection = collection(db,"products")
        if (category){
            const queryFilter= query(queryCollection, where("category" , "==", category))
            getDocs(queryFilter)
            .then(res =>setListProducts (res.docs.map(product =>({id: product.id, ...product.data()}))))
        }else{
        getDocs(queryCollection)
        .then(res =>setListProducts (res.docs.map(product =>({id: product.id, ...product.data()}))))
        }
    },[category])// eslint-disable-line react-hooks/exhaustive-deps
    
    return(
        <div className='containerListProducts container' >
            <h1>{section}</h1> 
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer