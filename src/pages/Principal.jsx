import { Container } from "react-bootstrap";
import ListarPostagens from "../component/Postagens";

export default function Principal() {
    return(
        
            <Container style={{marginTop: 100, alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
                    <ListarPostagens></ListarPostagens>
            </Container>
    );
}