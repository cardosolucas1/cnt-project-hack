import React from 'react';
import ListChoice from '../../../../components/ListChoices';

const Lateral = () => {
  const choices = [
    { choice: "Pintura visível", color: "green" },
    { choice: "Pintura desgastada", color: "red" },
    { choice: "Pintura inexistente", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização Horizontal - Faixas laterais"
    choices={choices}
    backLink="/centralHorizontalSinalization"
    nextLink="/fendersHorizontalSinalization"
  />);
}

export default Lateral;
