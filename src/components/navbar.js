import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" >
      <Container className="navbar">
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">List</Nav.Link>
            <Nav.Link href="#link">Users</Nav.Link>
            <Nav.Link href="#link">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;