import React from 'react';
import ListChoice from '../../../../components/ListChoices';

const StreetCurvesConditional = () => {
  const choices = [
    { choice: "COM placas e COM defensas", color: "grey" },
    { choice: "COM placas e SEM defensas", color: "orange" },
    { choice: "SEM placas e COM defensas", color: "orange" },
    { choice: "SEM placas e SEM defensas", color: "red" }
  ]
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Condições das Curvas perigosas"
    choices={choices}
    backLink="/streetCurves"
    nextLink="/shoulderConditional"
  />);
}

export default StreetCurvesConditional;
