import { useEffect } from 'react';
import { Card } from "react-bootstrap";
import ScrollReveal from 'scrollreveal';
import '../App.css';


export default function CardCostumizado(props) {
  useEffect(() => {
    ScrollReveal().reveal('.card-title', { origin: 'left', distance: '100px', scale: 0.9, delay: 400 });
    ScrollReveal().reveal('.card-text', { origin: 'right', distance: '100px', scale: 0.9, delay: 400 });
  }, []);

  return (
    <Card style={{ border: 'none'}}>
        {
            props?.img && (
              <>
                <Card.Img variant="top" src={props.img} style={{position: "relative"}}/>
              </>
                )
        }
    </Card>
  );
}
