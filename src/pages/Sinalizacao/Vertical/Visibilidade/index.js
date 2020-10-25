import ListChoice from '../../../../components/ListChoices';
const VisibilityVerticalSinalization = () => {
  const choices = [
    { choice: "Inexistência de matos cobrindo as placas", color: "green" },
    { choice: "Algum mato cobrindo as placas", color: "orange" },
    { choice: "Mato cobrindo totalmente as placas", color: "red" },
    { choice: "Inexistência de placas", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização vertical - Visibilidade das Placas"
    choices={choices}
    backLink="/intersectionVerticalSinalization"
    nextLink="/readabilityVerticalSinalization"
  />);
}

export default VisibilityVerticalSinalization;
