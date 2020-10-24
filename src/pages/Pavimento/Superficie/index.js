import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header'
import Container from './styles';
import Button from '../../../components/Button';
import Choice from '../../../components/Choice';

const Localization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Pavimento"/>
      <Container>
      <h2>Condição da superfície</h2>
        <section>
           <Choice title="Perfeito" color="green"/>
           <Choice title="Desgastado" color="red"/>
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