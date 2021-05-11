import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './styles/global.css'
function MyNavbar() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand><Link to="/" className="navlinks" style={style}>Surge App</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><Link to='/about' className="navlinks" style={style}>about</Link></Nav.Link>
          <Nav.Link ><Link to='/contact' className="navlinks" style={style}>Contact</Link></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link><Link to="/login" className="navlinks">Login</Link></Nav.Link>
          <Nav.Link >
            <Link to="/register" className="navlinks">
              Register
              </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const style = {
  textDecoration: 'none',
  color: '#fff'

}
export default MyNavbar;
