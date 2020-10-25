import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header'
import Container from './styles';
import Button from '../../../components/Button';
import Choice from '../../../components/Choice';
import Title from '../../../components/Title';

const Localization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Pavimento"/>
      <Container>
      <Title title="Condição da superfície"/>
        <section>
           <Choice title="Perfeito" color="green"/>
           <Choice title="Desgastado" color="red"/>
        </section>
        <div>
          <Button title="Voltar" value="/localization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/speed" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default Localization;