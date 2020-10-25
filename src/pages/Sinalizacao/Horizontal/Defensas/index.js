import ListChoice from '../../../../components/ListChoices';
const Fenders = () => {
  const choices = [
    { choice: "Presentes, quando necessárias em todo percurso", color: "green" },
    { choice: "Presentes, quando necessárias em parte do percurso", color: "orange" },
    { choice: "Ausentes, mas necessárias em todo percurso", color: "red" },
    { choice: "Não necessárias", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Sinalização"
    title="Sinalização Horizontal - Defensas"
    choices={choices}
    backLink="/lateralHorizontalSinalization"
    nextLink="/speedVerticalSinalization"
  />);
}

export default Fenders;