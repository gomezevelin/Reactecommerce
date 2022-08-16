import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./CheackOut.scss";
import { CartContext} from "../../Context/CartContext"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cheackout = () => {
  const {contador, totalCarrito, cart, clear, removeFromCart } = useContext(CartContext);
  return contador === 0 ? (
    <>
      <div className="container">
        <div className="mensajeCompra">
          <i class="fa-regular fa-face-frown fa-7x"></i>
          <p className="textoMensajeCompra">Ups..!!</p>
          <p className="textoMensajeCompra">
            El carrito esta vacio!, tal vez te interese chusmear algunos de
            estos productos, Quien sabe por ahí te copa alguno y terminas
            disfrutando como loco!
          </p>
        </div>
      </div>
      <ItemListContainer section="Listado de Productos"  />
    </>
  ) : (
    <>
      <div className="container">
        <div className="mensajeCompra">
          <i class="fa-regular fa-face-grin-tongue-wink fa-7x"></i>
          <p className="textoMensajeCompra">Genial !!!</p>
          <p className="textoMensajeCompra">
            Es verdad, no podes comprar la felicidad, pero podes comprarte este
            carrito que te va a hacer muuuuy feliz!
          </p>
        </div>
        <div>
          <h5>Detalle del Carrito</h5>
        </div>
        <Table striped hover>
          <thead>
            <tr>
              <th>Articulo</th>
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
                      <img className="itemImgC" src={p.img} alt="algo" />
                      <div className="contenedorDescrip">
                        <p className="tituloDesc">{p.title}</p>
                        <p>{p.price}</p>
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
                      <p className="tituloImporte">
                        {parseInt(p.quantitySelected) * parseFloat(p.price)}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="contenedorCant">
                      <button onClick={() => removeFromCart(p.id)}>
                        <i className="fa-solid fa-trash-can fa-l"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="tFooter">
            <tr>
              <td colSpan={2} className="derecha">
                Total Carrito
              </td>
              <td className="derecha">${totalCarrito}</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2} className="derecha">
                Envío
              </td>
              <td className="derecha">$ {0}</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan={2} className="derecha">
                Total
              </td>
              <td className="derecha">${totalCarrito}</td>
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
                    onClick={() => clear()}
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

export default Cheackout;