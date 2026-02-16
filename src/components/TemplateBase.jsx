import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconGroup from './IconGroup.jsx';

export default function TemplateBase({ titulo, cor, disciplinas }) {
  const [etapa, setEtapa] = useState(null);
  const [materia, setMateria] = useState(null);

  if (!etapa) return (
    <div className="container">
      <Link to="/" className="btn-voltar">← Início</Link>
      <h2 style={{ color: cor }}>{titulo}</h2>
      <div className="grid">
        {Object.keys(disciplinas).map(ano => (
          <button key={ano} onClick={() => setEtapa(ano)} className="card" style={{ borderTop: `10px solid ${cor}` }}>{ano}</button>
        ))}
      </div>
    </div>
  );

  if (!materia) return (
    <div className="container">
      <button onClick={() => setEtapa(null)} className="btn-voltar">← Voltar</button>
      <h2 style={{ color: cor }}>{etapa}</h2>
      <div className="grid">
        {disciplinas[etapa].map(d => (
          <button key={d} onClick={() => setMateria(d)} className="card" style={{ fontSize: '0.9rem' }}>{d.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <button onClick={() => setMateria(null)} className="btn-voltar">← Voltar</button>
      <h2 style={{ color: cor }}>{etapa} - {materia.toUpperCase()}</h2>
      <div className="tabela-wrapper">
        <table className="tabela">
          <thead>
            <tr>
              <th>Eixos</th><th>Direitos</th><th>Objetivos</th><th>Saberes</th><th>Bimestres</th><th>BNCC</th><th>Recursos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>---</td><td>---</td><td>---</td><td>---</td><td>---</td><td>---</td><td><IconGroup /></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}