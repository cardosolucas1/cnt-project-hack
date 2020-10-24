import React from 'react';
import PropType from 'prop-types';

import { Container } from './styles';

const Button = ({ clickFunction, title, value }) => {
  return (
    <Container>
      <button 
        className="button-cotrol"
        type="button"
        onClick={() => clickFunction(value)}
      >
        {title}
      </button>
    </Container>
  );
};

Button.PropType = {
  title: PropType.string.isRequired,
  value: PropType.string,
}

export default Button;