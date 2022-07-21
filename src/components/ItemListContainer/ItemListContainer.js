import './ItemListContainer.scss'
import ItemProduct from '../ItemProduct/ItemProduct'

const ListContainer = ({section}) => {
    const vela1={
        title:"Vela Adela",
        price:1500,
        img:'/assets/vela1.jpg',
        stock: 5, 
    }
    const vela2={
        title:"Vela Mara",
        price:1200,
        img:'/assets/velaAlma.jpg',
        stock: 3, 
    }
    const vela3={
        title:"Vela Esperanza",
        price:1700,
        img:'/assets/velaEsperanza.jpg',
        stock: 4, 
    }
    const vela4={
        title:"Vela Milagros",
        price:2000,
        img:'/assets/velaMilagros.jpg',
        stock: 2, 
    }
    return(
        <div className='ContainerlistProducts'>
            <h1>{section}</h1>
            <div className='listProducts'>
            <ItemProduct  data={vela1}/>
            <ItemProduct data={vela2}/>
            <ItemProduct data={vela3}/>
            <ItemProduct data={vela4}/>
            </div>
            
        </div>
    )
}

export default ListContainer