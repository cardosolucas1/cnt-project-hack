import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Container from './styles';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Identification = () => {
  const history = useHistory();

  const HandleClick = (route) => {
    history.push(route);
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
    </Container>
    
  </section>
  );
}
  

export default Identification;