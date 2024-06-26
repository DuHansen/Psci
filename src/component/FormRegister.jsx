import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import { auth } from "../config/firebase";

export default function FormRegister() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  

  const navigate = useNavigate(); // Crie uma instância do useNavigate

  async function handleRegister(event) {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, senha)
   // await axios.post("http://localhost:8000/users", payload)
      .then(() => {
        alert('Usuário cadastrado com sucesso!'); // Exibe a mensagem de sucesso
        navigate('/login'); // Redireciona para a página de login

        setNome("");
        setEmail("");
        setSenha("");
        setRepetirSenha("");
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário', error);
      });
  }

  return (
    <Container>
      <Form>
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Digite seu nome</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridNome">
          <Form.Label>Digite seu e-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPasswordRepeat">
            <Form.Label>Repetir Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              value={repetirSenha}
              onChange={(e) => setRepetirSenha(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label={
              <p>
                Estou de acordo com a
                <a href="//google.com">política de privacidade</a>
              </p>
            }
          />
        </Form.Group>
        <Container className="d-flex justify-content-center">
        <Button variant="primary" type="submit" onClick={handleRegister}>
          Cadastrar
        </Button>
        </Container>
      </Form>
    </Container>
  );
}