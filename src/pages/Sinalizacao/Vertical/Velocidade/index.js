import ListChoice from '../../../../components/ListChoices';
const SpeedVerticalSinalization = () => {
  const choices = [
    { choice: "Presente", color: "green" },
    { choice: "Ausente", color: "red" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização vertical - Placas de velocidade"
    choices={choices}
    backLink="/fendersHorizontalSinalization"
    nextLink="/indicationVerticalSinalization"
  />);
}

export default SpeedVerticalSinalization;
