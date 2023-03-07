import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./components/css/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth,setAuth } from './components/hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from 'react-bootstrap/Dropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ColorSchemesExample() {
  const navigate=useNavigate();
  const {authData,setAuth} =useAuth();
  const logout= ()=>{
    setAuth(null);
   navigate("/")
  }
  return (

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">FASTCART</Navbar.Brand>
          <div className="logo-container">
            <img src="/home/sayone/Documents/learning/broto react/my-app/src/components/images/logo.png" alt="" width="100px" />
          </div>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#features">Terms</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            </Nav>
            {!authData ?
              <div align="nav-buttons">

                <Button className='nav-button ' variant="light"><Link style={{ textDecoration: 'none', color: 'blue' }}  to="/login">Login</Link> </Button>
                <Button className='nav-button' variant="light"><Link style={{ textDecoration: 'none', color: 'blue' }}  to="/register">Register</Link> </Button>
                
              </div>
              :
              <div align="nav-buttons"  style={{ display: 'flex', alignItems: 'center' }}>

                <Button className='nav-button' variant=""><Link style={{ textDecoration: 'none', color: 'white' }} to="/cart">
                   <ShoppingCartIcon/>My Cart</Link></Button>
                <Dropdown className='nav-button'>
                  <Dropdown.Toggle variant="" id="dropdown-basic" style={{ color: 'white' }}>
                  <AccountCircleIcon/> {authData.user.first_name} {authData.user.last_name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>

                    <Dropdown.Item href="#/action-2">
                      <Button className='nav-button' variant="light"><Link style={{ textDecoration: 'none', color: 'black' }} to="/profile"> Account</Link></Button>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      <Button className='nav-button' style={{ textDecoration: 'none', color: 'white' }} variant="danger" onClick={()=>logout()}> Logout</Button>
                    </Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </div>
            }
          
          
        </Container>
        </Navbar>
  );
}

export default ColorSchemesExample;