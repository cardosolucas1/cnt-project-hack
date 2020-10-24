import React, { useHistory } from 'react';
import Header from '../../components/Header';
import Container from './styles';
import TextInput from '../../components/TextInput';
import Button from '../../components/ButtonList/Button';

const Identification = () => {
  const HandleBack = (route) => {
    const history = useHistory();
    history.push(route);
  };
  return (
  <section>
    <Header title="Identificação"/>
    <Container>
      <TextInput label="ID do Colaborador" />
      <div>
        <Button value="/" title="Voltar" clickFunction={HandleBack}/>
        <Button value="/next" title="Próxima"/>
      </div>
    </Container>
    
  </section>
  );
}
  

export default Identification;