import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container } from 'react-bootstrap';s

function Header(){
    return(
        <div>
            <h1 >
                FASTCART
            </h1>
            <Button>Button</Button>
            <div className="bg-primary Container">
                <p>Example</p>
            </div>
        </div>
    )
}

export default Header;