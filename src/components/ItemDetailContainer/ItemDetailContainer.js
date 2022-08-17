import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spiner from "../Spiner/spiner"
import { doc, getDoc } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ItemDetailContainer = ({category}) =>{
    const [listDetail, setListDetail] = useState({})
    const {id} = useParams ()
        useEffect(()=>{
        const queryDoc = doc(db, "products", id)
        getDoc(queryDoc)
        .then(res=>setListDetail({id: res.id, ...res.data()}))
    },[id])
        return (
                <div className="containerItemDetail">
                    <h1>{category}</h1> 
                    {Object.keys(listDetail).length > 0 && <ItemDetail dataItem={listDetail}/>}
                    {Object.keys(listDetail).length === 0  && <Spiner/>}
                </div>
            )
}

export default ItemDetailContainer