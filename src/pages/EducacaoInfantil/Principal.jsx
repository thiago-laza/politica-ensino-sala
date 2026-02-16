import React from 'react';
import TemplateInfantil from '../../components/TemplateInfantil.jsx';

const PrincipalInfantil = () => {
  const meusCampos = [
    "O eu, o outro e o nós",
    "Corpo, gestos e movimentos",
    "Traços, sons, cores e formas",
    "Escuta, fala, pensamento e imaginação",
    "Espaços, tempos, quantidades, relações e transformações"
  ];

  return <TemplateInfantil titulo="Educação Infantil" cor="#fb923c" campos={meusCampos} />;
};

export default PrincipalInfantil;