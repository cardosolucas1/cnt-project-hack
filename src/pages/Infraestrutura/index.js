import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import Container from '../../components/ChoicesStyled';
import Button from '../../components/Button';
import Choice from '../../components/Choice';
import Title from '../../components/Title';

const ReadabilityVerticalSinalization = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Intraestrutura"/>
      <Container>
      <Title title="Intraestrutura de apoio"/>
        <section>
           <Choice title="Postos de abastecimento" color="#212226"/>
           <Choice title="Controlador de velocidade" color="#212226"/>
           <Choice title="Borracharia" color="#212226"/>
           <Choice title="Concessionária de caminhões ou ônibos/oficina mecânica" color="#212226"/>
        </section>
        <div>
          <Button title="Voltar" value="/readabilityVerticalSinalization" clickFunction={handleClick}/>
          <Button title="Próxima" value="/criticalPoint" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default ReadabilityVerticalSinalization;