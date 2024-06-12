import React, { useEffect } from 'react';
import { Card, Col, Row } from "react-bootstrap";
import PageCostumizada from '../component/PageCostumizada';
import CardCostumizado from "../component/cardCostomizado";
import Descubra from "../component/surprise";
import imagemprin from "../img/brain.png";
import imagemprin2 from "../img/terapia.png";
export default function LandingPage() {
    // Função para lidar com o efeito de deslocamento
    const handleScroll = () => {
      
    const firstCard = document.getElementById('firstCard');
    const secondCard = document.getElementById('secondCard');
    
    const scrollPosition = window.scrollY;

        // Defina a altura em que o segundo cartão deve começar a sobrepor o primeiro
        const overlapStartHeight = 100; // Ajuste este valor conforme necessário

        // Ajuste o zIndex para garantir que o segundo cartão passe por cima do primeiro
        if (scrollPosition > overlapStartHeight) {
            firstCard.style.zIndex = -1;
            secondCard.style.zIndex = 2;

        } else {
            firstCard.style.zIndex = 2;
            secondCard.style.zIndex = -1;
        }

        const firstCardHeight = firstCard.offsetHeight;

        // Verifica se o segundo cartão passou completamente pelo primeiro
        if (scrollPosition > firstCardHeight + firstCard.offsetTop) {
            // Muda o primeiro cartão para position: absolute após o segundo passar por ele
            
            firstCard.style.top = `100vh`;
        } else {
            // Mantém o primeiro cartão como position: fixed enquanto o segundo não passa por ele
            firstCard.style.position = 'fixed';
            firstCard.style.top = '0px';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Limpe o ouvinte de evento quando o componente for desmontado
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            left: 0, // Adiciona esta linha para alinhar à esquerda
            right: 0, // Adiciona esta linha para alinhar à direita
            margin: 'auto', // Centraliza o div na página
            overflow: 'hidden', 
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', // Permite que o segundo cartão se mova livremente
            border: 'none'
            }}>
        
            <Card id='firstCard' style={{ 
                border: 'none',
                backgroundColor: 'white',
                width:'100vw',
                height: '100vh',
                textAlign: 'center',
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh', 
                overflow: 'none', 
                position: 'fixed', // Mantém o primeiro cartão fixo
                top: 0,
                zIndex: 2 // Inicialmente acima do segundo cartão

            }}>
    <Row style={{padding: "0% 10%",  textAlign: 'center', alignItems: "center", justifyContent: "center", margin: 0, overflow: 'none', }} >
        <Col style={{  textAlign: 'center', alignItems: "center", justifyContent: "center"}} lg={4} sm={12}>
            <div style={{ textAlign: 'center', alignItems: "center", justifyContent: "center",marginTop: 80,  overflow: 'hidden' }}>
                <h1 style={{color:'black', textAlign: 'center' }}>Bem-vindo ao nosso site!</h1>
            </div>
        </Col>
        <Col  lg={4} sm={12} style={{textDecoration: 'none', alignItems: 'center', marginTop: 100, textAlign:'center',  overflow: 'hidden'}}>
                <Descubra  id="home"></Descubra>
        </Col>
        <Col  lg={4} sm={12}>
            
                <CardCostumizado img={imagemprin} />
            
            
        </Col>
        
      </Row>
    </Card>
    
    
    <div id='secondCard' style={{
        boxShadow: '4px 4px 4px 4px rgba(0, 0, 0, 0.5)',
               left: 0, // Adiciona esta linha para alinhar à esquerda
               right: 0, // Adiciona esta linha para alinhar à direita
               margin: 'auto', // Centraliza o div na página
               maxWidth: '200vh',
               overflow: 'hidden' ,
               width:'100vw',
               position: 'relative',
               border: 'none',
               minHeight: '100vh',
               zIndex: 1, // Inicialmente abaixo do primeiro cartão
               marginTop: '100vh',
               alignItems: 'center',
               justifyContent: 'center',
               textAlign: 'center', // Permite que o segundo cartão se mova livremente
               top: 0, // Alinha o topo do div com o topo da tela
            }}>
                <PageCostumizada></PageCostumizada>
                
        </div>
        <Card style={{ border:'none', height: '100vh'}}>
                    <h1>Terapia</h1>
                    <img alt="terapia" src={imagemprin2}></img>

                </Card>
    </div>
    );
}
