import React from 'react';
import PropType from 'prop-types';

import { Container } from './styles';

const ListButton = ({ clickFunction, title, value }) => {
  return (
    <Container>
      <button className="button-cotrol" value={value} type="button" onClick={clickFunction}>{title}</button>
    </Container>
  );
};

ListButton.PropType = {
  title: PropType.string.isRequired,
  value: PropType.string,
}

export default ListButton;