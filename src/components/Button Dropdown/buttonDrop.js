import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function ButtonDrop() {
  return (
    
    <Dropdown as={ButtonGroup}>
      <Link to= "/products"><Button variant="dark">Productos</Button></Link>

      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="" href="#/action-1">Velas de Soja</Dropdown.Item>
        <Dropdown.Item as={Link} to="" href="#/action-2">Portavelas</Dropdown.Item>
        <Dropdown.Item as={Link} to="" href="#/action-3">Macetas</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonDrop;