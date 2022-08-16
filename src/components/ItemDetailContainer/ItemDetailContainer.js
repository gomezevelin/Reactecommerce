import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../../utils/products.mock"
import Spiner from "../Spiner/spiner"

const ItemDetailContainer = ({category}) =>{
    const [listDetail, setListDetail] = useState({})
    const {id} = useParams ()
    const getProducts = (id) => new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const productDetail = products.find (product => product.id === parseInt(id))
            resolve(productDetail)
            },1)
        })
        useEffect(()=>{
        getProducts(id)
            .then((res)=>{
            setListDetail(res)})
            .catch((error)=>{
            console.log("hubo un problema")})
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