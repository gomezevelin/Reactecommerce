import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import "./buttonDrop.scss"

function ButtonDrop() {
  return (
    
    <Dropdown as={ButtonGroup} size="small">
      <Link to= "/products" ><Button variant="dark" className="btn-react">Productos</Button></Link>

      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" className="btn-react" size="small"/>

      <Dropdown.Menu className='menu-btn' >
        <Dropdown.Item as={Link} to="category/velas_soja" href="#/action-1">Velas de Soja</Dropdown.Item>
        <Dropdown.Item as={Link} to="category/portavelas" href="#/action-2">Portavelas</Dropdown.Item>
        <Dropdown.Item as={Link} to="category/macetas" href="#/action-3">Macetas</Dropdown.Item>
        <Dropdown.Item as={Link} to="category/faroles" href="#/action-4">Faroles</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonDrop;