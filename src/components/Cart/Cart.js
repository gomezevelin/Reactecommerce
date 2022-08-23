import Table from "react-bootstrap/Table";
import React, { useContext, useState } from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Cart.scss";
import {CartContext} from "../../Context/CartContext"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ModalCart from "../Modals/ModalCart"
import db from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const Cart = () => {
  const {contador, totalCarrito, cart, clear, removeFromCart } = useContext(CartContext);
  const [showModal,setShowModal]= useState(false)
  const [success, setSuccess] = useState()
  const [order, setOrder] = useState({
    items: cart.map((p)=>{
      return{
        id:p.id,
        title:p.title,
        price:p.price,
        cant: p.quantitySelected 
      }
    } ),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalCarrito
  })
  const [formData,setFormData]= useState({
    name:"",
    phone:"",
    email:""
  })

  

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const submitData = (e) =>{
    e.preventDefault ()
    pushData({...order, buyer: formData})
  }

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, 'ordenes')
    const orderDoc = await addDoc(collectionOrder, newOrder)
    setSuccess(orderDoc.id)
    console.log('ORDEN GENERADA', orderDoc)
  }

  return contador === 0 ? (
    <>
      <div className="container">
        <div className="mensajeCompra">
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
          <p className="textoMensajeCompra">
            Es verdad, no podes comprar la felicidad, pero podes comprarte este
            carrito que te va a hacer muuuuy feliz!
          </p>
        </div>
        <div>
          <h5>Detalle del Carrito</h5>
          {console.log("orden:", order)}
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
                      <img className="itemImgC" src={`/assets/${p.img}`} alt="algo" />
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
                      <button onClick={() => removeFromCart(p.id)}>x</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="tFooter">
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
                  <Button
                    onClick={()=> setShowModal(true)}
                    className="buttonSize"
                    variant="dark"
                  >
                  Ir a Pagar
                  </Button>
              </td>
            </tr>
          </tfoot>
        </Table>
        
      </div>
      {showModal &&
        <ModalCart title="Datos Usuario" close={() =>{setShowModal(false)}}>
          {success ?(
            <>
            <h2>Su orden se generó correctamente</h2>
            <p>Id de compra:  {success}</p>
            </>):(<>
            <h1>Formulario</h1>
            <form onSubmit={submitData}>
              <input 
                type="text" 
                name="name" 
                placeholder="Ingrese su nombre" 
                onChange={handleChange}
                value={formData.name}>
              </input>
              <input 
                type="number" 
                name="phone" 
                placeholder="Ingrese su teléfono" 
                onChange={handleChange}
                value={formData.phone}>
              </input>
            <input 
              type="email" 
              name="email" 
              placeholder="Ingrese su email" 
              onChange={handleChange}
              value={formData.email}>
            </input>
            <button type="submit">Enviar</button>
            </form></>)
          }
          
      </ModalCart>
      }
      
      
    </>
  );
};
export default Cart;