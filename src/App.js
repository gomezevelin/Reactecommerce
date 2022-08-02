
import './App.scss';
/*import ListContainer from './components/ItemListContainer/ItemListContainer';*/
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import ProductsComplete from './pages/Productos';
import Checkout from './pages/Checkout';

function App() {
  
  return (
    <BrowserRouter>
    
      <div className="divNav">
        <NavBar/>
      </div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<ProductsComplete/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/products/:category' element={<h1>Categorias</h1>}></Route>
          <Route path='/products/:category/:id' element={<Detail cathegory="Velas"/>}></Route>
          <Route path='*' element= {<h1>Error 404 - Página no encontrada</h1>}></Route>
          
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
