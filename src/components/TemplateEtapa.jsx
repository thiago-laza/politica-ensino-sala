import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente que todos os grupos usarão para manter o padrão
const TemplateEtapa = ({ tituloEtapa, disciplinas, cor, colunas }) => {
  const [disciplinaAtiva, setDisciplinaAtiva] = useState(null);

  if (!disciplinaAtiva) {
    return (
      <div style={containerStyle}>
        <Link to="/" style={btnVoltar}>← Voltar</Link>
        <h2 style={{ color: cor, fontSize: '2.5rem' }}>{tituloEtapa}</h2>
        <div style={gridStyle}>
          {disciplinas.map(d => (
            <button key={d} onClick={() => setDisciplinaAtiva(d)} style={{ ...cardStyle, borderTop: `5px solid ${cor}` }}>
              {d.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <button onClick={() => setDisciplinaAtiva(null)} style={btnVoltar}>← Voltar para Disciplinas</button>
      <h2 style={{ color: cor }}>{tituloEtapa} - {disciplinaAtiva.toUpperCase()}</h2>
      
      <div style={tabelaWrapper}>
        <table style={tabelaStyle}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              {colunas.map(col => <th key={col} style={paddingStyle}>{col}</th>)}
              <th style={paddingStyle}>Recursos Digitais</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {colunas.map(col => <td key={col} style={cellStyle}>Conteúdo aqui...</td>)}
              <td style={recursosCellStyle}><IconGroup /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ... (Sub-componentes de Ícones e Estilos que já construímos)
// [Aqui entram o IconGroup e IconeRecurso que já temos]

export default TemplateEtapa;