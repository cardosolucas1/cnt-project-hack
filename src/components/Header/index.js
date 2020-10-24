import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyled from './styles';
import ListButton from '../ButtonList';

const Header = ({ title, logged }) => {
  return (
    <>
    <HeaderStyled>
      <h1>{ title }</h1>
      {logged &&
        <div>
          <button>Navegar</button>
          <button>Sair</button>
        </div>
      }
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