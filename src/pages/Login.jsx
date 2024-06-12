import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";
import "../App.css";
import FormLogin from "../component/FormLogin";
import FormRegister from "../component/FormRegister";

export default function Login() {

  const [key, setKey] = useState("login");

  const navigate = useNavigate(); 

  async function handlerVoltar(event){
    event.preventDefault();
  
        navigate('/');
  
    
  }
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{height: "100vh", minHeight: "100vh", backgroundColor: 'bisque', alignItems: "center", justifyContent: "center"}}
    >
      
      <Container
        className=" align-items-center shadow-lg p-3 mb-5 bg-white rounded p-5"
        style={{ maxWidth: 400, justifyContent: "center", alignItems: "center"}}
      >
   
        <Row className="brygada-1918">
          <Col>
            <h3 className="text-center mb-3">Sistema de agendamento</h3>
            <Tabs
              id="tabs-login"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="w-100"
              justify
              fluid
            >
              <Tab
                eventKey="login"
                title="Login"
                className="border border-top-0 p-2"
              >
                <p className="text-center">Entre com sua conta</p>
                <FormLogin />
              </Tab>
              <Tab
                eventKey="register"
                title="Registro"
                className="border border-top-0 p-2"
              >
                <p className="text-center">Vamos fazer seu registro?</p>
                <FormRegister />
              </Tab>
            </Tabs>
            
          </Col>
        </Row>
        <Row style={{ textAlign: 'center', alignItems: 'center' }}>
  <button
    style={{ 
      color: 'black', 
      background: 'none', 
      border: 'none', 
      cursor: 'pointer',
      padding: '0',
      fontSize: 'inherit' // Adicione mais estilos conforme necessário
    }}
    onClick={handlerVoltar}
  >
    Voltar
  </button>
</Row>

      </Container>
    </Container>
  );
}
