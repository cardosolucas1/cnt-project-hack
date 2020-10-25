import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import Container from '../../components/ChoicesStyled';
import Button from '../../components/Button';
import Title from '../../components/Title';
import CheckBox from '../../components/Checkbox/';
import TextInput from '../../components/TextInput';

const CriticalPoint = () => {

  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Pontos críticos"/>
      <Container>
      <Title title="Identifique os pontos críticos"/>
          <section>
            <CheckBox>Não possui</CheckBox>
            <CheckBox>Queda de barreira</CheckBox>
            <CheckBox>Ponte caída</CheckBox>
            <CheckBox>Erosão na pista</CheckBox>
            <CheckBox>Buraco grande</CheckBox>
            <CheckBox>Passagem em nível</CheckBox>
            <CheckBox>Obra no pavimento</CheckBox>
            <CheckBox>Balança em operação</CheckBox>
            <TextInput label="Outros"/>
          </section>
        <div>
          <Button title="Voltar" value="/infrastructure" clickFunction={handleClick}/>
          <Button title="Próxima" value="/" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default CriticalPoint;