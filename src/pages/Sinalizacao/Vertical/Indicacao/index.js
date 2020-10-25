import ListChoice from '../../../../components/ListChoices';
const IndicationVerticalSinalization = () => {
  const choices = [
    { choice: "Presente", color: "green" },
    { choice: "Ausente", color: "red" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização vertical - Placas de indicação"
    choices={choices}
    backLink="/speedVerticalSinalization"
    nextLink="/intersectionVerticalSinalization"
  />);
}

export default IndicationVerticalSinalization;
