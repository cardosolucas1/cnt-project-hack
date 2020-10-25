import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Container from './styles';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Localization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Localização"/>
      <Container>
        <section>
          <TextInput label="UF"/>
          <TextInput label="Trecho"/>
          <TextInput label="Rodovia"/>
        </section>
        <div>
          <Button title="Voltar" value="/identification" clickFunction={handleClick}/>
          <Button title="Próxima" value="/surface" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default Localization;