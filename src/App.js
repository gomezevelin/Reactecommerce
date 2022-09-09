import NavBar1 from './components/NavBar/NavBar';
import './App.scss'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import TerminaCompra from './pages/TerminaCompra';
import Footer from './components/Footter/Footer';
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="divNav">
        <NavBar1/>
      </div>
      <div id='mainContainer '>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<ItemListContainer section="Todos los Productos"/>}></Route>
          <Route path='/category/:category' element={<ItemListContainer/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart'  element={<Checkout/>}></Route>
          <Route path="/finalcompra" element={<TerminaCompra />} />
          <Route path='/:category/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element= {<h1>Error 404 - Página no encontrada</h1>}></Route>
        </Routes>
      </div> 
      <Footer/> 
    </BrowserRouter>
    
    </CartProvider>
  );
}
export default App;