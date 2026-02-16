import React from 'react';
import TemplateEtapa from '../../components/TemplateEtapa';

const SextoAno = () => {
  const disciplinas = ['arte', 'ciências', 'história do recife', 'matemática', '...'];
  const colunas = ['Eixos', 'Direito', 'Objetivos', 'Conteúdos', 'Bimestres', 'BNCC'];

  return (
    <TemplateEtapa 
      tituloEtapa="6º Ano - Anos Finais" 
      cor="#60a5fa" 
      disciplinas={disciplinas}
      colunas={colunas}
    />
  );
};

export default SextoAno;