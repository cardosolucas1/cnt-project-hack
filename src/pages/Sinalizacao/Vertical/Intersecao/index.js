import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header'
import Container from '../../../../components/ChoicesStyled';
import Button from '../../../../components/Button';
import Choice from '../../../../components/Choice';
import Title from '../../../../components/Title';

const IntersectionVerticalSinalization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Sinalização"/>
      <Container>
      <Title title="Sinalização Vertical - Placas de interseção"/>
        <section>
           <Choice title="Presenças de placas" color="green"/>
           <Choice title="Ausência de placas" color="red"/>
           <Choice title="Não ocorre interseções" color="#212226"/>
        </section>
        <div>
          <Button title="Voltar" value="/indicationVerticalSinalization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/visibilityVerticalSinalization" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default IntersectionVerticalSinalization;