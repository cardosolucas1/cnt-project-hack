import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header'
import Container from '../../../../components/ChoicesStyled';
import Button from '../../../../components/Button';
import Choice from '../../../../components/Choice';
import Title from '../../../../components/Title';

const VisibilityVerticalSinalization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Sinalização"/>
      <Container>
      <Title title="Sinalização Vertical - Visibilidade das placas"/>
        <section>
           <Choice title="Inexistência de matos cobrindo as placas" color="green"/>
           <Choice title="Algum mato cobrindo as placas" color="orange"/>
           <Choice title="Mato cobrindo totalmente as placas" color="red"/>
           <Choice title="Inexistência de placas" color="#212226"/>
        </section>
        <div>
          <Button title="Voltar" value="/intersectionVerticalSinalization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/readabilityVerticalSinalization" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default VisibilityVerticalSinalization;