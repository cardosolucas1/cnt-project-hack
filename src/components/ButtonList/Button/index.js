import React from 'react';
import PropTypes from 'prop-types';
import { ButtonForm } from './styles';

const Button = ({ title }) => {
  return (
    <ButtonForm>{title}</ButtonForm>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button;