import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header'
import Container from '../../../../components/ChoicesStyled';
import Button from '../../../../components/Button';
import Choice from '../../../../components/Choice';
import Title from '../../../../components/Title';

const ReadabilityVerticalSinalization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Sinalização"/>
      <Container>
      <Title title="Sinalização Vertical - Legibilidade das placas"/>
        <section>
           <Choice title="Legíveis" color="green"/>
           <Choice title="Desgastadas" color="orange"/>
           <Choice title="Ilegíveis" color="red"/>
        </section>
        <div>
          <Button title="Voltar" value="/visibilityVerticalSinalization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/infrastructure" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default ReadabilityVerticalSinalization;