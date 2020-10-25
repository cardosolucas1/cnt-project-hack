import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header'
import Container from '../../../../components/DualChoice/index';
import Button from '../../../../components/Button';
import Choice from '../../../../components/Choice';
import Title from '../../../../components/Title';

const SpeedVerticalSinalization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Sinalização"/>
      <Container>
      <Title title="Sinalização vertical - Placas de velocidade"/>
        <section>
           <Choice title="Presente" color="green"/>
           <Choice title="Ausente" color="red"/>
        </section>
        <div>
          <Button title="Voltar" value="/fendersHorizontalSinalization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/indicationVerticalSinalization" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default SpeedVerticalSinalization;