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
      <Title title="Pavimento do acostamento"/>
        <section>
           <Choice title="Pavimento perfeito" color="green"/>
           <Choice title="Não pavimento perfeito" color="#F28C0F"/>
           <Choice title="Más condições" color="red"/>
           <Choice title="Destruído" color="#212226"/>
        </section>
        <div>
          <Button title="Voltar" value="/speed" clickFunction={handleClick}/>
          <Button title="Próxima" value="/centralHorizontalSinalization" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default Localization;