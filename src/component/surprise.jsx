import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Descubra() {
  const [show, setShow] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true); // Novo estado para controlar a visibilidade do botão
  
  const handleAbrir = () => {
    setShow(true);
    setButtonVisible(true); // Garante que o botão esteja visível quando o card é mostrado
  };
  
  const navigate = useNavigate(); 

  async function handlerContinuar(event) {
      event.preventDefault();
      
      // Adiciona a classe que inicia a animação de abertura da porta
      const porta = document.getElementById('porta');
      const port = document.getElementById('fundo');
      porta.classList.add('porta-aberta');
      
      // Espera a animação da porta abrir antes de iniciar o zoom
      setTimeout(() => {
        port.classList.add('zoom');
      }, 2000); // Ajuste este tempo para a duração da animação da porta
      
      // Espera as animações terminarem antes de navegar e esconde o botão
      setTimeout(() => {
        setButtonVisible(false); // Isso fará com que o botão desapareça
        navigate('/surprise');
      }, 3000); // Ajuste este tempo para a duração total das animações
    }
    
  return (
      <>
          <Button style={{ fontSize: "20px", justifyContent: 'center' }} variant="outline-dark" onClick={handleAbrir}>
              Descubra!
          </Button>

          {show && (
              
              <Card style={{padding:"0% 35%"}} className='wrapper active-popup' aria-labelledby="contained-modal-title-vcenter" centered>
                    
                      <div id='fundo' className='fundo'>
                      
                          <div id="porta" className="porta">
                            
                              <div className="macaneta"></div>
                          </div>
                      </div>
                      
                      {buttonVisible && (
                        <Button style={{marginTop: 10}} variant="outline-dark" href="#porta" onClick={handlerContinuar}>Abrir Porta</Button>
                      )}
              </Card>
          )}
      </>
  );
}
