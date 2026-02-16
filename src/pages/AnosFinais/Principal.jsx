import React from 'react';
import TemplateBase from '../../components/TemplateBase.jsx';

const PrincipalAnosFinais = () => {
  const discPadrao = [
    'arte', 'ciências da natureza', 'educação física', 
    'geografia', 'história', 'língua inglesa', 
    'língua portuguesa', 'matemática'
  ];

  const discComRecife = [...discPadrao, 'história do recife'];
  const discComLeis = [...discPadrao, 'introdução às leis trabalhistas'];

  const dadosEtapas = {
    "6º Ano": discComRecife,
    "7º Ano": discComRecife,
    "8º Ano": discPadrao,
    "9º Ano": discComLeis,
  };

  return (
    <TemplateBase 
      titulo="Anos Finais" 
      cor="#60a5fa" 
      disciplinas={dadosEtapas} 
    />
  );
};

export default PrincipalAnosFinais;