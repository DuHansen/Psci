import React from 'react';


import esqueletoGif from "../video/esqueleto.gif"; // Certifique-se de que o caminho está correto


export default function Surprise() {
  return (
    <div style={{
      backgroundColor: 'black',
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <img
        src={esqueletoGif}
        alt="Esqueleto dançante"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
