import ListChoice from '../../../../components/ListChoices';
const ReadabilityVerticalSinalization = () => {
  const choices = [
    { choice: "Legíveis", color: "green" },
    { choice: "Desgastadas", color: "orange" },
    { choice: "Ilegíveis", color: "red" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização vertical - Legibilidade das Placas"
    choices={choices}
    backLink="/visibilityVerticalSinalization"
    nextLink="/infrastructure"
  />);
}

export default ReadabilityVerticalSinalization;
