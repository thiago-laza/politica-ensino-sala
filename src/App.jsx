import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports corrigidos conforme o seu ls -R
import Home from "./pages/Home.jsx";
import PrincipalAnosIniciais from "./pages/AnosIniciais/Principal.jsx";
import PrincipalAnosFinais from "./pages/AnosFinais/Principal.jsx";
import PrincipalEJA from "./pages/Eja/Principal.jsx"; // MUDADO DE EJA PARA Eja
import PrincipalInfantil from "./pages/EducacaoInfantil/Principal.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/infantil" element={<PrincipalInfantil />} />
        <Route path="/anos-iniciais" element={<PrincipalAnosIniciais />} />
        <Route path="/anos-finais" element={<PrincipalAnosFinais />} />
        <Route path="/eja" element={<PrincipalEJA />} />

        {/* Rota para evitar tela branca se digitar errado */}
        <Route path="*" element={<div className="container"><h1>404</h1><p>Página não encontrada</p></div>} />
      </Routes>
    </Router>
  );
}