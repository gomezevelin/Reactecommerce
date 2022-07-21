import './ItemListContainer.scss'
import ItemProduct from '../ItemProduct/ItemProduct'

const ListContainer = ({section}) => {
    return(
        <div className='ContainerlistProducts'>
            <h1>{section}</h1>
            <div className='listProducts'>
            <ItemProduct title="Vela Adela" price={1500} img={'/assets/vela1.jpg'} />
            <ItemProduct title="Vela Mara" price={1200} img={'/assets/velaAlma.jpg'}/>
            </div>
            
        </div>
    )
}

export default ListContainer