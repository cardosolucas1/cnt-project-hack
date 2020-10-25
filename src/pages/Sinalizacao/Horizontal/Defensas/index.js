import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header'
import Container from '../../../../components/ChoicesStyled';
import Button from '../../../../components/Button';
import Choice from '../../../../components/Choice';
import Title from '../../../../components/Title';

const Shoulder = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Sinalização"/>
      <Container>
      <Title title="Sinalização Horizontal - Defensas"/>
        <section>
           <Choice title="Presentes, quando necessárias em todo percurso" color="green"/>
           <Choice title="Presentes, quando necessárias em parte do percurso" color="orange"/>
           <Choice title="Ausentes, mas necessárias em todo percurso" color="red"/>
           <Choice title="Não necessárias" color="#212226"/>
        </section>
        <div>
          <Button title="Voltar" value="/lateralHorizontalSinalization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/speedVerticalSinalization" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default Shoulder;