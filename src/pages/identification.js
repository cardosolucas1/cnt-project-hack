import React from 'react';
import Header from '../components/Header/index';
import Container from '../components/Container';
import TextInput from '../components/TextInput/index';
import '../index.css';

const Identification = () =>
  <section>
    <Header title="CNT"/>
    <Container>
      <TextInput label="ID do Colaborador" />
    </Container>
  </section>;

export default Identification;