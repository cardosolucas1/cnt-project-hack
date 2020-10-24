import React from 'react';

import { Container } from './styles';

const ListButton = () => {
  return (
    <Container>
      <button className="button-cotrol">Voltar</button>
      <button className="button-cotrol">Próximo</button>
    </Container>
  );
};



export default ListButton;