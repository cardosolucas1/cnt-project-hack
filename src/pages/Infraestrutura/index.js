import ListChoice from '../../components/ListChoices/index';
const Infrastructure = () => {
  const choices = [
    { choice: "Postos de abastecimento", color: "#212226" },
    { choice: "Controlador de velocidade", color: "#212226" },
    { choice: "Borracharia", color: "#212226" },
    { choice: "Concessionária de caminhões ou ônibos/oficina mecânica", color: "#212226" },
  ];
  return (
  <ListChoice
    headerTitle="Intraestrutura"
    title="Intraestrutura de apoio"
    choices={choices}
    backLink="/readabilityVerticalSinalization"
    nextLink="/criticalPoint"
  />);
}

export default Infrastructure;
