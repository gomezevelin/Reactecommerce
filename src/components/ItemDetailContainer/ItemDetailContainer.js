import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import itemDetailProduct from "../../utils/products.mock"

const ItemDetailContainer = ({cathegory}) =>{
      const [ListDetail, setListDetail] = useState([])
    
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
        },[])  

        return (
            <div className="containerItemDetail">
                <h1>{cathegory}</h1> 
                <ItemDetail dataItem={ListDetail}/>
            </div>
        )
       
    }
    

export default ItemDetailContainer