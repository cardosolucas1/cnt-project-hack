import React from 'react';
import ListChoice from '../../../components/ListChoices';

const Shoulder = () => {
  const choices = [
    { choice: "Pavimento perfeito", color: "green" },
    { choice: "Não pavimento perfeito", color: "#F28C0F" },
    { choice: "Más condições", color: "red" },
    { choice: "Destruído", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Pavimento"
    title="Pavimento do acostamento"
    choices={choices}
    backLink="/speed"
    nextLink="/centralHorizontalSinalization"
  />);
}

export default Shoulder;
