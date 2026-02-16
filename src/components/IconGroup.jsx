import React from 'react';

const Icone = ({ cor, label, sigla }) => (
  <div style={{ 
    backgroundColor: cor, color: 'white', padding: '5px', borderRadius: '5px', 
    fontSize: '0.7rem', textAlign: 'center', minWidth: '25px', cursor: 'pointer' 
  }} title={label}>
    {sigla}
  </div>
);

export default function IconGroup() {
  return (
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
      <Icone cor="#ef4444" label="Vídeo" sigla="V" />
      <Icone cor="#3b82f6" label="Plano de Aula" sigla="P" />
      <Icone cor="#10b981" label="Atividade" sigla="A" />
      <Icone cor="#f59e0b" label="Sequência Didática" sigla="S" />
      <Icone cor="#d946ef" label="AEE" sigla="AE" />
      <Icone cor="#06b6d4" label="Ensino Híbrido" sigla="H" />
      <Icone cor="#facc15" label="Avaliação Externa" sigla="X" />
      <Icone cor="#8b5cf6" label="Compartilhar" sigla="C" />
    </div>
  );
}