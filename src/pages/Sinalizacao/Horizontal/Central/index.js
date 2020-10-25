import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header'
import Container from '../../../../components/ChoicesStyled';
import Button from '../../../../components/Button';
import Choice from '../../../../components/Choice';
import Title from '../../../../components/Title';

const Central = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Sinalização"/>
      <Container>
      <Title title="Sinalização Horizontal - Faixas centrais"/>
        <section>
           <Choice title="Pintura visível" color="green"/>
           <Choice title="Pintura desgastada" color="red"/>
           <Choice title="Pintura inexistente" color="#212226"/>
        </section>
        <div>
          <Button title="Voltar" value="/shoulder" clickFunction={handleClick}/>
          <Button title="Próxima" value="/lateralHorizontalSinalization" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default Central;