import React from 'react';
import ListChoice from '../../../components/ListChoices';

const Surface = () => {
  const choices = [
    { choice: "Perfeito", color: "green" },
    { choice: "Desgastado", color: "red" },
  ];
  return (
  <ListChoice
    headerTitle="Pavimento"
    title="Condição da superfície"
    choices={choices}
    backLink="/localization"
    nextLink="/speed"
  />);
}

export default Surface;