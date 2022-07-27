
import './App.scss';
import ListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  return (

    <div className='container' >
      <div className="divNav">
        <NavBar/>
      </div>
      <div className='mainContainer'>
        <ListContainer section="Velas de Soja"/>
      </div>
    </div>
    
  );
}

export default App;
