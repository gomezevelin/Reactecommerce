import ItemProduct from "../Item/Item"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const ItemList = ({dataProducts}) => {

    return(
    <div className='listProducts'>
        {dataProducts.map((products)=>{
            return(<ItemProduct key={products.id} data={products}/>)})}
    </div>)
}
export default ItemList 