import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
  return (
    <Container style={{ padding:"10px 10px 10px 10px", justifyContent: 'center', alignItems: 'center', borderColor: 'black',  marginLeft: '10%', marginRight: '10%'}}>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            
            <p>
              Pscicologia</p>
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