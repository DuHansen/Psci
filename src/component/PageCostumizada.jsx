import { Card, Col, Row } from "react-bootstrap";
import "../App.css";
import img2 from "../img/autoconhecimento.png";
import img3 from "../img/corpo-saudavel.png";
import img1 from "../img/mente-saudavel.png";
export default function pagecostumizada(){
   
    return(
    <>
  <Row style={{margin: 0,backgroundColor: '#FFB14A', alignItems: 'center',textAlign:'center', height: "100vh", padding: '0% 10%'}}>
                
                <Col lg={4} sm={4}>
                
                <Card className="card-zoom" style={{ backgroundColor: 'white', alignItems: 'center', boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'}} >
                  <img src={img1} alt="WhatsApp" style={{marginTop:125, height:'70px', width:'50px', paddingBottom:"20px"}}/>
                </Card>
                
                </Col>
                <Col lg={4} sm={4}>
                
                <Card className="card-zoom" id="margem" style={{ backgroundColor: 'white', alignItems: 'center',  boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'}} >
                <img src={img2} alt="WhatsApp" style={{marginTop:125, height:'70px', width:'50px', paddingBottom:"20px"}}/>
                </Card>
                
                </Col>
                <Col lg={4} sm={4} style={{textAlign:'center', alignItems: 'center'}}>
                
                  <Card className="card-zoom" style={{ backgroundColor: 'white', alignItems: 'center', boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)'}} >
                    <img src={img3} alt="WhatsApp" style={{marginTop:125, height:'70px', width:'50px', paddingBottom:"20px"}}/>
                  </Card>
                
            </Col>
                
            </Row>
    </>
      
    );
}