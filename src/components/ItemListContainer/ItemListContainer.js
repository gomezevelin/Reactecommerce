import './ItemListContainer.scss'
import ItemList from '../ItemList.js/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemListContainer = ({section, sale}) => {
    
    const [listProducts, setListProducts] = useState([])
    const {category} = useParams()

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
    },[category])
    
    return(
        <div className='containerListProducts container' >
            {section  && <h1 className='titleSectionCategory'>{section}</h1>}
            {category  && <h1 className='titleSectionCategory'>{category.toUpperCase()}</h1>}
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}
export default ItemListContainer