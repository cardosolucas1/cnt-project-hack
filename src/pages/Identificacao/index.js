import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Header from '../../components/Header';
import Container from './styles';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Identification = () => {
  const history = useHistory();

  const HandleClick = (route) => {
    if (route === '/localization') {
    toast.success('Autenticação realizado!', {
      autoClose: 1500,
      pauseOnHover: false
    });

    setTimeout(() => {
      history.push(route);
    }, 2000);
   
  }
  
  else {
    history.push(route);
  }
    
  };
  return (
  <section>
    <Header title="Identificação"/>
    <Container>
      <TextInput label="ID do Colaborador" />
      <div>
        <Button value="/" title="Voltar" clickFunction={HandleClick}/>
        <Button value="/localization" title="Próxima" clickFunction={HandleClick}/>
      </div>
      <ToastContainer />
    </Container>
    
  </section>
  );
}
  

export default Identification;