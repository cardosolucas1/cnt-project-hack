import React from 'react';
import ListChoice from '../../../components/ListChoices';

const HighwayType = () => {
  const choices = [
    { choice: "Pista dupla com CANTEIRO central", color: "#212226" },
    { choice: "Pista dupla com BARREIRA central", color: "#212226" },
    { choice: "Pista dupla com FAIXA central", color: "#212226" },
    { choice: "Pista simples de MÃO ÚNICA", color: "#212226" },
    { choice: "Pista simples de MÃO DUPLA", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Tipo da Rodovia"
    choices={choices}
    backLink="/criticalPoint"
    nextLink="/highwayProfile"
  />);
}

export default HighwayType;