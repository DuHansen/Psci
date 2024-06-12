import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Landing from "../component/landing";
import logo from "../img/psciLogo.jpeg";


export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand={'md'} fixed="top" style={{backgroundColor: '#FFB14A'}} data-scroll data-scroll-speed="-5">
      <Container>
      <Navbar.Brand as={Link} to="/"> 
          <img
            width="90"
            height="70"
            src= {logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{color:"#FFB14A", border: "none"}} onClick={handleShow}>
          <div class="container">
            <label for="label-check" class="hamburger-label">
              <div class="line" style={{backgroundColor: "black", height: "2px", width: "35px", marginBottom: "5px"}}></div>
              <div class="line" style={{backgroundColor: "black", height: "2px", width: "30px", marginBottom: "5px"}}></div>
              <div class="line" style={{backgroundColor: "black", height: "2px", width: "25px", marginBottom: "5px"}}></div>
            </label>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end" style={{backgroundColor:"#FFB14A", justifyContent:'center'}}
          
        >
          <Offcanvas.Header closeButton style={{color:"black"}}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Psi
            </Offcanvas.Title>
          </Offcanvas.Header >
          <Offcanvas.Body >
            <Nav style={{color:"black", fontSize:"20px"}} className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className='NavLink' style={{color:"black", fontSize:"20px"}} as={Link} to="/" onClick={handleClose}>Inicial</Nav.Link>
              <Nav.Link className='NavLink' style={{color:"black", fontSize:"20px"}} as={Link} to="/sobre" onClick={handleClose}>Sobre</Nav.Link>
              <Nav.Link className='NavLink' style={{color:"black", fontSize:"20px"}} as={Link} to="/contatos" onClick={handleClose}>Contatos</Nav.Link>
              <Landing></Landing>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
