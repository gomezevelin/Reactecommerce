
import './ModalCart.scss'
import CloseButton from 'react-bootstrap/CloseButton';

const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            <CloseButton  onClick={() => close(false)}/>
            {children}
        </div>
    )
}
export default Modal