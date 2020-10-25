import React from 'react';
import PropTypes from 'prop-types';
import { FooterStyled, InputSection } from './styles';
import cam from '../../images/cam.svg';

const Footer = ({ picture, buttons }) => {
  return (
    <FooterStyled>
    {buttons.map(({ title }) => <button>{title}</button>)}
      {picture && 
        <InputSection class="image-upload">
          <label for="file-input">
              <img src={cam} alt=""/>
          </label>
          <input id="file-input" type="file"/>
        </InputSection>
      }
    </FooterStyled>
  );
};

Footer.default = {
  picture: false,
}

Footer.propTypes = {
  picture: PropTypes.bool,
  button: PropTypes.arrayOf(PropTypes.string),
}

export default Footer;