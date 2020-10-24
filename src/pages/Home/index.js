import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/index';
import Container from './styles';
import Button from '../../components/Button';

const Home = () => {
  const history = useHistory();
  const handleClick = (route) => {
    history.push(route);
  }
  return (
    <>
      <Header title="CNT"/>
      <Container>
        <Button title="Formulário" value="/identification" clickFunction={handleClick}/>
      </Container>
    </>
  );
};

export default Home;