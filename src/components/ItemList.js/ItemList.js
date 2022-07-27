import ItemProduct from "../Item/Item"

const ItemList = ({dataProducts}) => {
     
    return(
    <div className='listProducts'>
        {dataProducts.map((products)=><ItemProduct key={products.id} data={products}/>)}
    </div>)
}

export default ItemList