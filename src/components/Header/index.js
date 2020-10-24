import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyled from './styles';
import ListButton from '../ButtonList';

const Header = ({ title }) => {
  return (
    <>
    <HeaderStyled>
      <button>Navegar</button>
      <h1>{ title }</h1>
      <button>Sair</button>
    </HeaderStyled>
    <ListButton title="Próximo" />
    <ListButton title="Voltar" />
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;