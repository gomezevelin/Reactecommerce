
import './App.scss';
/*import ListContainer from './components/ItemListContainer/ItemListContainer';*/
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    
    <div className='container' >
      <div className="divNav">
        <NavBar/>
      </div>
      <div className='mainContainer'>
        <ItemDetailContainer cathegory="Velas"/>
      </div>
    </div>
    
  );
}

export default App;
