import React from 'react';
import ListChoice from '../../../components/ListChoices';

const AdditionalStreet = () => {
  const choices = [
    { choice: "Possui faixa adicional de subida", color: "green" },
    { choice: "Não possui faixa adicional de subida", color: "red" }
  ]
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Faixa adicional de subida"
    choices={choices}
    backLink="/highwayProfile"
    nextLink="/bridges"
  />);
}

export default AdditionalStreet;
