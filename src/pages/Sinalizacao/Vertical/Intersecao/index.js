import ListChoice from '../../../../components/ListChoices';
const IntersectionVerticalSinalization = () => {
  const choices = [
    { choice: "Presenças de placas", color: "green" },
    { choice: "Ausência de placas", color: "red" },
    { choice: "Não ocorre interseções", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização vertical - Placas de interseção"
    choices={choices}
    backLink="/indicationVerticalSinalization"
    nextLink="/visibilityVerticalSinalization"
  />);
}

export default IntersectionVerticalSinalization;
