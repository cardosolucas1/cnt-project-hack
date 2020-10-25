import React from 'react';
import ListChoice from '../../../../components/ListChoices';

const Central = () => {
  const choices = [
    { choice: "Pintura visível", color: "green" },
    { choice: "Pintura desgastada", color: "red" },
    { choice: "Pintura inexistente", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização Horizontal - Faixas centrais"
    choices={choices}
    backLink="/shoulder"
    nextLink="/lateralHorizontalSinalization"
  />);
}

export default Central;
