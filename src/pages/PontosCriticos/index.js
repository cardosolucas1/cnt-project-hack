import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import Container from '../../components/ChoicesStyled';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from './styles';

const CriticalPoint = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title="Pontos críticos"/>
      <Container>
      <Title title="Identifique os pontos críticos"/>
        <section>
          <label htmlFor="nao-possui">
              Não possui
            <input type="checkbox" id="nao-possui" />
          </label>
        </section>
        <div>
          <Button title="Voltar" value="/infrastructure" clickFunction={handleClick}/>
          <Button title="Próxima" value="/" clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default CriticalPoint;