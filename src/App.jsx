import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- CONFIGURAÇÃO DE CORES (TEMA ESCURO FIXO) ---
const theme = {
  background: '#0f172a', // Azul muito escuro (Slate 900)
  cardBg: '#1e293b',     // Azul escuro (Slate 800)
  text: '#f1f5f9',       // Branco acinzentado
  accent: '#38bdf8',     // Azul brilhante (Sky 400)
  header: '#1e293b'
};

const styles = {
  app: {
    backgroundColor: theme.background,
    color: theme.text,
    minHeight: '100vh',
    width: '100vw', // Ocupa toda a largura
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden'
  },
  header: {
    backgroundColor: theme.header,
    padding: '60px 20px',
    textAlign: 'center',
    borderBottom: `1px solid rgba(255,255,255,0.1)`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  },
  mainContent: {
    flex: 1,
    width: '100%',
    maxWidth: '1400px', // Aumentado para ocupar mais espaço em telas grandes
    margin: '0 auto',
    padding: '40px 20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Cards um pouco maiores
    gap: '30px',
    width: '100%'
  },
  card: {
    background: theme.cardBg,
    textDecoration: 'none',
    color: theme.text,
    padding: '50px 30px',
    borderRadius: '24px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.4rem',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

// --- COMPONENTES ---

const Home = () => (
  <div style={styles.grid}>
    <Link to="/infantil" className="card-hover" style={{...styles.card, borderTop: '10px solid #fb923c'}}>Educação Infantil</Link>
    <Link to="/anos-iniciais" className="card-hover" style={{...styles.card, borderTop: '10px solid #4ade80'}}>Anos Iniciais</Link>
    <Link to="/anos-finais" className="card-hover" style={{...styles.card, borderTop: '10px solid #60a5fa'}}>Anos Finais</Link>
    <Link to="/eja" className="card-hover" style={{...styles.card, borderTop: '10px solid #a855f7'}}>EJA</Link>
  </div>
);

const SubPage = ({ titulo, itens, cor }) => (
  <div style={{ width: '100%' }}>
    <Link to="/" style={{ color: theme.accent, textDecoration: 'none', fontWeight: 'bold', display: 'block', marginBottom: '20px' }}>
      ← Voltar para o Início
    </Link>
    <h2 style={{ fontSize: '2rem', marginBottom: '30px', borderLeft: `8px solid ${cor}`, paddingLeft: '15px' }}>{titulo}</h2>
    <div style={styles.grid}>
      {itens.map(item => (
        <div key={item} style={{...styles.card, borderTop: `6px solid ${cor}`, fontSize: '1.1rem'}}>
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div style={styles.app}>
        {/* Estilos globais para o hover e reset de margens */}
        <style>{`
          body { margin: 0; padding: 0; overflow-x: hidden; background: ${theme.background}; }
          .card-hover:hover { 
            transform: translateY(-12px); 
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            filter: brightness(1.2);
          }
        `}</style>

        <header style={styles.header}>
          <h1 style={{ fontSize: '2.8rem', letterSpacing: '-1px' }}>Política de Ensino em Sala</h1>
          <p style={{ marginTop: '15px', opacity: 0.7, fontSize: '1.2rem' }}>
            Recursos Digitais • BNCC Computação • RMER Recife
          </p>
        </header>

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infantil" element={<SubPage titulo="Educação Infantil" cor="#fb923c" itens={['Bebês (0 a 1a 6m)', 'Crianças Bem Pequenas (1a 6m a 3a 11m)', 'Crianças Pequenas (4a a 5a 11m)']} />} />
            <Route path="/anos-iniciais" element={<SubPage titulo="Anos Iniciais" cor="#4ade80" itens={['1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano']} />} />
            <Route path="/anos-finais" element={<SubPage titulo="Anos Finais" cor="#60a5fa" itens={['6º Ano', '7º Ano', '8º Ano', '9º Ano']} />} />
            <Route path="/eja" element={<SubPage titulo="EJA" cor="#a855f7" itens={['Módulo I', 'Módulo II', 'Módulo III', 'Módulo IV', 'Módulo V']} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}