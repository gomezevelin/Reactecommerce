import Table from "react-bootstrap/Table";
import React, { useContext} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Cart.scss";
import {CartContext} from "../../Context/CartContext"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const {contador, totalCarrito, cart, clear, removeFromCart } = useContext(CartContext);
  console.log("contador en cart",contador)

  return contador === 0 ? (
    <>
      <div className="container">
        <div className="mensajeCompra">
          <p className="textoMensajeCompra">
            El carrito esta vacio... te dejamos aca abajo la lista de todos los productos para que elijas los que más te gusten!
          </p>
        </div>
      </div>
      <ItemListContainer section="Listado de Productos"  />
    </>
  ) : (
    <>
      <div className="container">
        <div className="mensajeCompra">
          <p className="textoMensajeCompra">
            Muchas gracias por confiar en nosotros! Esperamos hacer de tu hogar, tu lugar favorito en el mundo!
          </p>
        </div>
        <div>
          <h5>Detalle del Carrito</h5>
        </div>
        <Table striped hover>
          <thead>
            <tr>
              <th></th>
              <th>Cantidad</th>
              <th>Importe</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((p) => {
              return (
                <tr>
                  <td>
                    <div className="itemNc">
                      <img className="itemImgC" src={`/assets/${p.img}`} alt="algo" />
                      <div className="contenedorDescrip">
                        <p className="tituloDesc">{p.title}</p>
                        <p>Precio por unidad: ${p.price}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorCant">
                      <p className="tituloCant">{p.quantitySelected}</p>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorImporte">
                      <p className="tituloImporte">$
                        {parseInt(p.quantitySelected) * parseFloat(p.price)}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorCant">
                      <button className="btn-trush" onClick={() => removeFromCart(p.id)}>x</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="tFooter">
            <tr>
              <td colSpan={2} className="total">
                Total
              </td>
              <td className="total">${totalCarrito}</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={1} className="derecha"></td>
              <td>
                <Button
                  onClick={() => clear()}
                  className="buttonSize"
                  variant="light"
                >
                  Vaciar Carrito
                </Button>
              </td>
              <td>
                <Link to={`/`}>
                  <Button className="buttonSize" variant="dark">
                    Seguir Comprando
                  </Button>
                </Link>
              </td>
              <td>
              <Link to={`/finalcompra`}>
                  <Button
                    className="buttonSize"
                    variant="dark"
                  >
                    Terminar Compra
                  </Button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </Table>
        
      </div>
    </>
  );
};
export default Cart;