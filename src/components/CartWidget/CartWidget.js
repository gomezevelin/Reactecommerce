import "./CartWidget.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons' 

const CardWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping}/>
        </div>
    )
}

export default CardWidget