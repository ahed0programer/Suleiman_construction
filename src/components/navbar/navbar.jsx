import './navbar.css'
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';


export default function MobileNavBar() {
    return (
        <Navbar variant="dark" expand="sm" className="d-sm-none">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <GiHamburgerMenu style={{ color: "white" }} />
                </Navbar.Toggle>

                <Navbar.Brand href="#">
                    {/*<img
                        src="https://via.placeholder.com/40"
                        alt="Logo"
                        style={{ height: "40px" }}
                    />*/}
                    <h1>Suleiman</h1> {/*//todo add real logo*/}
                </Navbar.Brand>





                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/products' className='link'>Our Products</Link>
                        <Link to='/members' className='link'>Members</Link>
                        <Link to='/contact' className='link'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
