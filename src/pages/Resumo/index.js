import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Container from '../../components/ChoicesStyled';
import Checkbox from '../../components/Checkbox';


const Resume = () => {
  const history = useHistory();
  const handleClickForms = (route) => {
      toast.success('Dados Enviados com success!', {
        autoClose: 2000,
        pauseOnHover: false
      });

    setTimeout(() => {
      history.push(route);
    }, 2500);
  };

  const handleClick = (route) => {
    history.push(route);
  }
  return (
    <>
      <Header title="Resumo dos formulários"/>
      <Title title="Você está conectado"/>
      <ToastContainer />
      <Container>
          <section>
            <Checkbox>Enviar: Formulário preechido às  9:45</Checkbox>
            <Checkbox>Enviar: Formulário preechido às  10:45</Checkbox>
            <Checkbox>Enviar: Formulário preechido às  11:05</Checkbox>
            <Checkbox>Enviar: Formulário preechido às  11:40</Checkbox>
          </section>
          <div>
            <Button title="Página Inicial" value="/" clickFunction={handleClick} />
            <Button title="Enviar Formulários" value="/" clickFunction={handleClickForms} />
          </div>
        </Container>
     
      <Footer buttons={[{ title: 'Navegar' }]} picture={true} />
    </>
  );
};

export default Resume;