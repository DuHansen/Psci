import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';




export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand={'md'} fixed="top" style={{backgroundColor:"#ffffff",  overflow: 'hidden'}}>
      <Container>
        <Navbar.Brand as={Link} to="/"> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{color:"#ffffff", border: "none"}} onClick={handleShow}>
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
          placement="end" style={{backgroundColor:"#ffffff", justifyContent:'center'}}
          
        >
          <Offcanvas.Header closeButton style={{color:"black"}}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Psi
            </Offcanvas.Title>
          </Offcanvas.Header >
          <Offcanvas.Body >
            <Nav style={{color:"black", fontSize:"20px"}} className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link style={{color:"black", fontSize:"20px"}} as={Link} to="/principal" onClick={handleClose}>Inicial</Nav.Link>
              <Nav.Link style={{color:"black", fontSize:"20px"}} as={Link} to="/pessoal" onClick={handleClose}>Postagens</Nav.Link>
              <Nav.Link style={{color:"black", fontSize:"20px"}} as={Link} to="/dashboard" onClick={handleClose}>Dashboard</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
