import React from 'react';
import ListChoice from '../../../components/ListChoices';

const Speed = () => {
  const choices = [
    { choice: "Não obriga a redução de velocidade", color: "green" },
    { choice: "Obriga a redução de velocidade", color: "#F28C0F" },
    { choice: "Baixíssima velocidade", color: "red" },
  ];
  return (
  <ListChoice
    headerTitle="Pavimento"
    title="Velocidade devido ao pavimento"
    choices={choices}
    backLink="/surface"
    nextLink="/shoulder"
  />);
}

export default Speed;