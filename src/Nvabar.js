import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./components/css/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useAuth,setAuth } from './components/hooks/useAuth';


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
              <div align="nav-buttons">

                <Button className='nav-button' style={{ textDecoration: 'none', color: 'white' }} variant="danger" onClick={()=>logout()}> Logout</Button>
                <Button className='nav-button' variant="light"><Link style={{ textDecoration: 'none', color: 'blue' }} to="/cart">My Cart</Link></Button>
               
              </div>
            }
          
          
        </Container>
        </Navbar>
  );
}

export default ColorSchemesExample;