import React from 'react';
import ListChoice from '../../../components/ListChoices';

const GeometryShoulder = () => {
  const choices = [
    { choice: "COM acostamento", color: "green" },
    { choice: "SEM acostamento", color: "red" }
  ]
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Acostamento"
    choices={choices}
    backLink="/streetCurvesConditional"
    nextLink="/resume"
  />);
}

export default GeometryShoulder;
