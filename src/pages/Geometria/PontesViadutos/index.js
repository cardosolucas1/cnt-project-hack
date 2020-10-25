import React from 'react';
import ListChoice from '../../../components/ListChoices';

const Bridges = () => {
  const choices = [
    { choice: "Possui ponte ou viaduto", color: "green" },
    { choice: "Não possui ponte ou viaduto", color: "red" }
  ]
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Pontes e Viadutos"
    choices={choices}
    backLink="/additionalStreet"
    nextLink="/streetCurves"
  />);
}

export default Bridges;
