import React from 'react';
import TemplateBase from '../../components/TemplateBase.jsx';

const PrincipalEJA = () => {
  const discPadrao = ['arte', 'ciências da natureza', 'educação física', 'geografia', 'história', 'língua inglesa', 'língua portuguesa', 'matemática'];
  const discComRecife = [...discPadrao, 'história do recife'];
  const discComLeis = [...discPadrao, 'introdução às leis trabalhistas'];

  const dadosEtapas = {
    "Módulo I": discComRecife,
    "Módulo II": discComRecife,
    "Módulo III": discPadrao,
    "Módulo IV": discComLeis,
    "Módulo V": discComLeis,
  };

  return <TemplateBase titulo="EJA" cor="#a855f7" disciplinas={dadosEtapas} />;
};

export default PrincipalEJA;