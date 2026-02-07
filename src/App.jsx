import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EducacaoInfantil from './pages/EducacaoInfantil';
import PaginaRede from './pages/PaginaRede';

// --- CONFIGURAÇÃO DE DISCIPLINAS POR GRUPO ---
const discComum = [
  'arte', 'ciências da natureza', 'educação física', 'geografia', 
  'história', 'língua inglesa', 'língua portuguesa', 'matemática'
];

const discComRecife = [...discComum, 'história do recife'];
const discComLeis = [...discComum, 'introdução às leis trabalhistas'];

// --- TEMA VISUAL ---
const theme = {
  background: '#0f172a',
  cardBg: '#1e293b',
  text: '#f1f5f9',
  headerBg: '#1e293b',
};

// --- COMPONENTE DA PÁGINA INICIAL ---
const Home = () => (
  <div style={gridStyle}>
    <Link to="/infantil" className="card-item" style={{ ...cardStyle, borderTop: '10px solid #fb923c' }}>
      Educação Infantil
    </Link>
    <Link to="/anos-iniciais" className="card-item" style={{ ...cardStyle, borderTop: '10px solid #4ade80' }}>
      Anos Iniciais
    </Link>
    <Link to="/anos-finais" className="card-item" style={{ ...cardStyle, borderTop: '10px solid #60a5fa' }}>
      Anos Finais
    </Link>
    <Link to="/eja" className="card-item" style={{ ...cardStyle, borderTop: '10px solid #a855f7' }}>
      EJA
    </Link>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  return (
    <Router>
      <div style={appWrapperStyle}>
        <style>{`
          body { margin: 0; padding: 0; background-color: ${theme.background}; color: ${theme.text}; font-family: 'Inter', sans-serif; overflow-x: hidden; }
          .card-item { transition: all 0.3s ease; text-decoration: none; color: inherit; background: ${theme.cardBg}; }
          .card-item:hover { transform: translateY(-10px); filter: brightness(1.2); box-shadow: 0 15px 30px rgba(0,0,0,0.4); }
        `}</style>

        <header style={headerStyle}>
          <h1 style={{ margin: 0, fontSize: '2.2rem' }}>Política de Ensino da Rede em Sala</h1>
          <p style={{ marginTop: '8px', opacity: 0.7 }}>Recursos Digitais • BNCC Computação • RMER Recife</p>
        </header>

        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/infantil" element={<EducacaoInfantil />} />

            <Route path="/anos-iniciais" element={
              <PaginaRede nivel="Anos Iniciais" cor="#4ade80" opcoesEtapas={[
                { id: '1', titulo: '1º Ano', disciplinas: discComum },
                { id: '2', titulo: '2º Ano', disciplinas: discComum },
                { id: '3', titulo: '3º Ano', disciplinas: discComum },
                { id: '4', titulo: '4º Ano', disciplinas: discComum },
                { id: '5', titulo: '5º Ano', disciplinas: discComum },
              ]} />
            } />

            <Route path="/anos-finais" element={
              <PaginaRede nivel="Anos Finais" cor="#60a5fa" opcoesEtapas={[
                { id: '6', titulo: '6º Ano', disciplinas: discComRecife },
                { id: '7', titulo: '7º Ano', disciplinas: discComRecife },
                { id: '8', titulo: '8º Ano', disciplinas: discComum },
                { id: '9', titulo: '9º Ano', disciplinas: discComLeis },
              ]} />
            } />

            <Route path="/eja" element={
              <PaginaRede nivel="EJA" cor="#a855f7" opcoesEtapas={[
                { id: 'm1', titulo: 'Módulo I', disciplinas: discComRecife },
                { id: 'm2', titulo: 'Módulo II', disciplinas: discComRecife },
                { id: 'm3', titulo: 'Módulo III', disciplinas: discComum },
                { id: 'm4', titulo: 'Módulo IV', disciplinas: discComLeis },
                { id: 'm5', titulo: 'Módulo V', disciplinas: discComLeis },
              ]} />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// --- ESTILOS AUXILIARES ---
const appWrapperStyle = { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' };
const headerStyle = { backgroundColor: theme.headerBg, padding: '40px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' };
const mainContentStyle = { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', width: '100%', maxWidth: '1400px', margin: '0 auto', boxSizing: 'border-box' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', width: '100%', marginTop: '20px' };
const cardStyle = { padding: '60px 20px', borderRadius: '24px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };