import React from 'react';

import TemplateBase from "../../components/TemplateBase.jsx";

const PrincipalAnosIniciais = () => {
  // Lista de disciplinas conforme sua solicitação
  const disciplinasComuns = [
    'arte', 
    'ciências da natureza', 
    'educação física', 
    'geografia', 
    'história', 
    'língua inglesa', 
    'língua portuguesa', 
    'matemática'
  ];

  // Estrutura de dados para os 5 anos
  const dadosEtapas = {
    "1º Ano": disciplinasComuns,
    "2º Ano": disciplinasComuns,
    "3º Ano": disciplinasComuns,
    "4º Ano": disciplinasComuns,
    "5º Ano": disciplinasComuns,
  };

  return (
    <TemplateBase 
      titulo="Anos Iniciais" 
      cor="#4ade80" 
      disciplinas={dadosEtapas} 
    />
  );
};

export default PrincipalAnosIniciais;