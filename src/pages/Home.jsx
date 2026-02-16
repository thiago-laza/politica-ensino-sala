import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Política de Ensino da Rede em Sala</h1>
        <p style={{ opacity: 0.7 }}>Recursos Digitais • BNCC Computação • RMER Recife</p>
      </header>

      <div className="grid">
        <Link to="/infantil" className="card" style={{ borderTop: '10px solid #fb923c' }}>
          Educação Infantil
        </Link>
        <Link to="/anos-iniciais" className="card" style={{ borderTop: '10px solid #4ade80' }}>
          Anos Iniciais
        </Link>
        <Link to="/anos-finais" className="card" style={{ borderTop: '10px solid #60a5fa' }}>
          Anos Finais
        </Link>
        <Link to="/eja" className="card" style={{ borderTop: '10px solid #a855f7' }}>
          EJA
        </Link>
      </div>
    </div>
  );
}