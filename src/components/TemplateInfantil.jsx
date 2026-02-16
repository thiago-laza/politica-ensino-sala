import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconGroup from './IconGroup.jsx';

export default function TemplateInfantil({ titulo, cor, campos }) {
  const [etapa, setEtapa] = useState(null);
  const [campo, setCampo] = useState(null);

  if (!etapa) return (
    <div className="container">
      <Link to="/" className="btn-voltar">← Início</Link>
      <h2 style={{ color: cor }}>{titulo}</h2>
      <div className="grid">
        {["Bebês", "Crianças 1-3", "Crianças 4-5"].map(e => (
          <button key={e} onClick={() => setEtapa(e)} className="card" style={{ borderTop: `10px solid ${cor}` }}>{e}</button>
        ))}
      </div>
    </div>
  );

  if (!campo) return (
    <div className="container">
      <button onClick={() => setEtapa(null)} className="btn-voltar">← Voltar</button>
      <h2>{etapa}</h2>
      <div className="grid">
        {campos.map(c => (
          <button key={c} onClick={() => setCampo(c)} className="card" style={{ fontSize: '0.8rem' }}>{c}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <button onClick={() => setCampo(null)} className="btn-voltar">← Voltar</button>
      <h2 style={{ color: cor }}>{etapa}</h2>
      <h3>{campo}</h3>
      <div className="tabela-wrapper">
        <table className="tabela">
          <thead>
            <tr>
              <th>Objetivos</th><th>Direitos</th><th>Bimestres</th><th>Vivências</th><th>Recursos</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>---</td><td>---</td><td>---</td><td>---</td><td><IconGroup /></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}