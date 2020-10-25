import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import Container from '../../components/ChoicesStyled';
import Button from '../../components/Button';
import Choice from '../../components/Choice';
import Title from '../../components/Title';

const ListChoice = ({ 
  headerTitle,
  title,
  choices,
  backLink,
  nextLink,
}) => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  }
  
  return (
    <>
      <Header title={headerTitle}/>
      <Container>
      <Title title={title}/>
        <section>
          {choices.map(({ choice, color }) => 
            <Choice color={color} title={choice}/>
        )}
        </section>
        <div>
          <Button title="Voltar" value={backLink} clickFunction={handleClick}/>
          <Button title="Próxima" value={nextLink} clickFunction={handleClick}/>
        </div>
      </Container>
    </>
  );
}

export default ListChoice;