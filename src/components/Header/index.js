import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyled from './styles';

const Header = ({ title }) => {
  return (
    <HeaderStyled>
      <button>Navegar</button>
      <h1>{ title }</h1>
      <button>Sair</button>
    </HeaderStyled>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;