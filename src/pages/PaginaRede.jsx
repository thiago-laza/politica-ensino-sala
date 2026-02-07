import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaginaRede = ({ nivel, cor, opcoesEtapas }) => {
  const [etapaSelecionada, setEtapaSelecionada] = useState(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null);
  const [filtroAberto, setFiltroAberto] = useState(null);

  // --- TELA 1: Seleção do Ano/Módulo ---
  if (!etapaSelecionada) {
    return (
      <div style={containerStyle}>
        <Link to="/" style={btnVoltar}>← Voltar para o Início</Link>
        <h2 style={{ ...tituloPagina, color: cor }}>{nivel}</h2>
        <div style={gridStyle}>
          {opcoesEtapas.map((op) => (
            <div 
              key={op.id} 
              onClick={() => setEtapaSelecionada(op)} 
              className="card-etapa"
              style={{ ...cardEtapaStyle, borderTop: `10px solid ${cor}` }}
            >
              <h3>{op.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- TELA 2: Seleção da Disciplina ---
  if (etapaSelecionada && !disciplinaSelecionada) {
    return (
      <div style={containerStyle}>
        <button onClick={() => setEtapaSelecionada(null)} style={btnVoltar}>← Voltar para {nivel}</button>
        <h2 style={{ ...tituloPagina, color: cor }}>{etapaSelecionada.titulo}</h2>
        <p style={{ marginBottom: '30px', opacity: 0.8 }}>Selecione a Disciplina:</p>
        <div style={gridStyle}>
          {etapaSelecionada.disciplinas.map((disc) => (
            <div 
              key={disc} 
              onClick={() => setDisciplinaSelecionada(disc)} 
              className="card-etapa"
              style={{ ...cardEtapaStyle, borderTop: `5px solid ${cor}`, padding: '30px 10px' }}
            >
              <h4 style={{ margin: 0, fontSize: '1rem', textTransform: 'capitalize' }}>{disc}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- TELA 3: Tabela de Dados ---
  return (
    <div style={containerStyle}>
      <button onClick={() => setDisciplinaSelecionada(null)} style={btnVoltar}>← Voltar para Disciplinas</button>
      <header style={{ width: '100%', marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ color: cor, fontSize: '1.8rem', margin: '0 0 5px 0' }}>{etapaSelecionada.titulo}</h2>
        <h3 style={{ fontSize: '1.2rem', margin: 0, textTransform: 'uppercase', opacity: 0.9 }}>{disciplinaSelecionada}</h3>
      </header>

      <div style={tabelaWrapper}>
        <table style={tabelaStyle}>
          <thead>
            <tr style={{ ...headerTrStyle, borderBottom: `3px solid ${cor}` }}>
              <ThFiltro titulo="Eixos" id="eixos" ativo={filtroAberto} setAtivo={setFiltroAberto} />
              <ThFiltro titulo="Direito de Aprendizagem" id="direitos" ativo={filtroAberto} setAtivo={setFiltroAberto} />
              <ThFiltro titulo="Objetivos da Aprendizagem" id="objetivos" ativo={filtroAberto} setAtivo={setFiltroAberto} />
              <ThFiltro titulo="Conteúdos/Saberes" id="conteudos" ativo={filtroAberto} setAtivo={setFiltroAberto} />
              <ThFiltro titulo="Bimestres" id="bimestres" ativo={filtroAberto} setAtivo={setFiltroAberto} />
              <ThFiltro titulo="Cod. Hab. BNCC" id="bncc" ativo={filtroAberto} setAtivo={setFiltroAberto} />
              <th style={paddingStyle}>Recursos Digitais</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((i) => (
              <tr key={i} style={bodyTrStyle}>
                <td style={cellStyle}>---</td><td style={cellStyle}>---</td><td style={cellStyle}>---</td>
                <td style={cellStyle}>---</td><td style={{...cellStyle, textAlign:'center'}}>---</td><td style={cellStyle}>---</td>
                <td style={recursosCellStyle}><IconGroup /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---
const ThFiltro = ({ titulo, id, ativo, setAtivo }) => (
  <th style={{ ...paddingStyle, position: 'relative' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
      <span>{titulo}</span>
      <span onClick={() => setAtivo(ativo === id ? null : id)} style={{ cursor: 'pointer', opacity: 0.5, fontSize: '0.7rem' }}>▼</span>
    </div>
    {ativo === id && <div style={dropdownStyle}>Opções em breve...</div>}
  </th>
);

const IconGroup = () => (
  <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
    <IconeRecurso tipo="video" label="Vídeo" /><IconeRecurso tipo="plano" label="Plano de Aula" />
    <IconeRecurso tipo="atividade" label="Atividades" /><IconeRecurso tipo="sequencia" label="Sequência Didática" />
    <IconeRecurso tipo="aee" label="Recursos AEE" /><IconeRecurso tipo="hibrido" label="Ensino Híbrido" />
    <IconeRecurso tipo="externa" label="Avaliações Externas" /><IconeRecurso tipo="share" label="Compartilhar" />
  </div>
);

const IconeRecurso = ({ tipo, label }) => {
  const [show, setShow] = useState(false);
  const cores = { video: '#ef4444', plano: '#3b82f6', atividade: '#10b981', sequencia: '#f59e0b', aee: '#d946ef', hibrido: '#06b6d4', externa: '#facc15', share: '#8b5cf6' };
  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: cores[tipo], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: cores[tipo] === '#facc15' ? '#1e293b' : 'white', fontWeight: 'bold', cursor: 'pointer' }}>
        {tipo === 'aee' ? 'AE' : tipo === 'hibrido' ? 'H' : tipo === 'externa' ? 'X' : tipo[0].toUpperCase()}
      </div>
      {show && <div style={tooltipStyle}>{label}</div>}
    </div>
  );
};

// --- ESTILOS ---
const containerStyle = { width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const btnVoltar = { alignSelf: 'flex-start', background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px', textDecoration: 'none', fontSize: '0.9rem' };
const tituloPagina = { fontSize: '2.5rem', marginBottom: '30px', fontWeight: 'bold' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', width: '100%' };
const cardEtapaStyle = { padding: '40px 20px', borderRadius: '24px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', background: '#1e293b', cursor: 'pointer', transition: 'transform 0.2s' };
const tabelaWrapper = { overflowX: 'auto', background: '#1e293b', borderRadius: '16px', width: '100%', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' };
const tabelaStyle = { width: '100%', borderCollapse: 'collapse', color: '#f1f5f9', minWidth: '1450px' };
const headerTrStyle = { backgroundColor: 'rgba(255,255,255,0.02)', fontSize: '0.8rem' };
const bodyTrStyle = { borderBottom: '1px solid rgba(255,255,255,0.1)' };
const paddingStyle = { padding: '15px' };
const cellStyle = { ...paddingStyle, verticalAlign: 'top', fontSize: '0.8rem' };
const recursosCellStyle = { ...paddingStyle, minWidth: '320px' };
const dropdownStyle = { position: 'absolute', top: '100%', left: 0, background: '#334155', padding: '10px', borderRadius: '8px', zIndex: 100, minWidth: '150px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)', fontSize: '0.75rem' };
const tooltipStyle = { position: 'absolute', bottom: '130%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#334155', color: 'white', padding: '6px 10px', borderRadius: '6px', whiteSpace: 'nowrap', fontSize: '0.7rem', zIndex: 110 };

export default PaginaRede;