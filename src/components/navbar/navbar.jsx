import './navbar.css'
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiHamburgerMenu } from 'react-icons/gi';

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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">Our Products</Nav.Link>
                        <Nav.Link href="#about">Members</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
