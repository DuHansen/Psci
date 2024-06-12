import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
  return (
    <Container style={{ 
      height: "20vh",
      padding: "10px", 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderColor: 'black', 
      marginLeft: '10%', 
      marginRight: '10%', 
      zIndex: 1000,
      position: 'fixed', // Alterado de 'relative' para 'fixed'
      left: 0, // Adicionado para fixar à esquerda
      bottom: 0, // Adicionado para fixar ao fundo
      right: 0, // Adicionado para fixar à direita
      backgroundColor: 'white' // Adicione uma cor de fundo se necessário
    }}>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            <h3>Sobre a empresa</h3>
            <p>
              psi</p>
          </div>
        </Col>
        <Col lg={4} sm={12} style={{textDecoration: 'none'}}>

            <h3>Redes sociais</h3>
          
            <Row>
              
            </Row>

            <Row>
             
            </Row>
        </Col>
        <Col lg={4} sm={12}>
         
        </Col>
      </Row>
    </Container>
  );
}