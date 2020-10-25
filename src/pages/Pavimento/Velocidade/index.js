import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header'
// import Container from './styles';
import Container from '../../../components/ChoicesStyled';
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
      <Title title="Velocidade devido ao pavimento"/>
        <section>
           <Choice title="Não obriga a redução de velocidade" color="green"/>
           <Choice title="Obriga a redução de velocidade" color="#F28C0F"/>
           <Choice title="Baixíssima velocidade" color="red"/>
        </section>
        <div>
          <Button title="Voltar" value="/surface" clickFunction={handleClick}/>
          <Button title="Próxima" value="/shoulder" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default Localization;