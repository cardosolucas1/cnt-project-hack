import React from 'react';
import ListChoice from '../../../components/ListChoices';

const HighwayProfile = () => {
  const choices = [{choice: "Plano", color: "#212226"}, {choice: "Ondulado", color: "#212226"}]
  return (
  <ListChoice
    headerTitle="Geometria da Via"
    title="Perfil da Rodovia"
    choices={choices}
    backLink="/highwayType"
    nextLink="/"
  />);
}

export default HighwayProfile;
