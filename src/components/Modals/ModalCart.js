
import './ModalCart.scss'
import CloseButton from 'react-bootstrap/CloseButton';

const ModalCart = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {children}
            <CloseButton  onClick={() => close(false)}/>
        </div>
    )
}
export default ModalCart