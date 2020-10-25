import React from 'react';
import ListChoice from '../../../../components/ListChoices';

const StreetCurves = () => {
  const choices = [
    { choice: "Trecho SEM curvas perigosas", color: "green" },
    { choice: "Trecho COM curvas perigosas", color: "red" }
  ]
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Presença de curvas perigosas"
    choices={choices}
    backLink="/bridges"
    nextLink="/streetCurvesConditional"
  />);
}

export default StreetCurves;

