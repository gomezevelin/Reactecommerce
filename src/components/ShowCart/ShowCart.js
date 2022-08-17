import React, { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./ShowCart.scss";
import { CartContext} from "../../Context/CartContext"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons' 

function CartContainer() {
    const [show, setShow] = useState(false);
    //const [ultimaCategoria, setUltimaCategoria] = useState("");
    const { contador, totalCarrito, removeFromCart, cart, clear } = useContext(CartContext);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <>
    <div className='divShowCart' onClick={handleShow}>
        
        <FontAwesomeIcon icon={faCartShopping}/>
        {contador > 0 ? (
        <Badge bg="secondary">{contador}</Badge>
        ) : (
        ""
        )}
    </div>

    <Offcanvas
        show={show}
        key={1}
        placement="end"
        name="end"
        onHide={handleClose}
    >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {contador === 0 ? (
            <h3>Su carrito está vacío</h3>
        ) : (
        <>
        <div className="tituloCarrito">
            <h5>Detalle del Carrito</h5>
        </div>
        {cart.map((p) => {
                return (
                <div key={p.id} className="item">
                    <div className="itemImg">
                    <img className="imagen" src={`/assets/${p.img}`} alt="ALGO" />
                    </div>
                    <div className="itemConDesc">
                    <div className="itemDescText">
                        <p className="itemDesc">{p.title}</p>
                    </div>
                    <div className="itemDescWidget">
                        <p className="itemDesc">{p.quantitySelected}</p>
                    </div>
                    <div className="itemDescWidget">
                        <p className="itemDesc">{p.price}</p>
                    </div>
                    </div>
                    <div className="itemConPrec">
                        <div className="itemConDel">
                            <button onClick={() => removeFromCart(p.id)}>X
                            </button>
                        </div>
                    <div className="itemConCant">
                        <p className="itemCant">
                            {parseInt(p.quantitySelected) * parseFloat(p.price)}
                        </p>
                    </div>
                </div>
            </div>
                );
            })}

            <div className="totalCarrito">
                <h5 className="importeTotal">
                    Total Carrito : $ {totalCarrito}
                </h5>
            </div>
            <Link to="/Cart">
                <Button
                onClick={handleClose}
                variant="dark"
                className="buttonSize"
                >
                Terminar Compra
                </Button>
            </Link>
            <div className="separador"></div>
                <Link to={`/`}>
                    <Button
                        onClick={() => clear()}
                        className="buttonSize"
                        variant="light"
                    >
                    Vaciar Carrito
                    </Button>
                </Link>
            </>
        )}
        </Offcanvas.Body>
    </Offcanvas>
    </>
    );
}

function ShowCart({ contador }) {
    return (
    <>
        <CartContainer contador={contador} />
    </>
    );
}

export default ShowCart;