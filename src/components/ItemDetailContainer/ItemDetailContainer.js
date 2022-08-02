import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { useEffect, useState, useParams } from "react"
import itemDetailProduct from "../../utils/products.mock"

const ItemDetailContainer = ({category}) =>{
      const [ListDetail, setListDetail] = useState([])
      /*const {id} = useParams ()*/
    
        const getProducts = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(itemDetailProduct[0])
            },2000)
            
        })
        useEffect(()=>{
        getProducts
            .then((res)=>{
            setListDetail(res)})
            .catch((error)=>{
            console.log("hubo un problema")})
        },[])// eslint-disable-line react-hooks/exhaustive-deps

        return (
            <div className="containerItemDetail">
                <h1>{category}</h1> 
                <ItemDetail dataItem={ListDetail}/>
            </div>
        )
       
    }
    

export default ItemDetailContainer