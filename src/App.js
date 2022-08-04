import NavBar1 from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    
      <div className="divNav">
        <NavBar1/>
      </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<ItemListContainer section="Todos los Productos"/>}></Route>
          <Route path='/products/:category' element={<ItemListContainer/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/items/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element= {<h1>Error 404 - Página no encontrada</h1>}></Route>
        </Routes>
      
    </BrowserRouter>
  );
}
export default App;