import React from 'react';
import PropType from 'prop-types';
import ChoiceBtn from './styles';

const Choice = ({ title, color }) => {
  return (
    <ChoiceBtn color={color} >{title}</ChoiceBtn>
  );
};

Choice.PropType = {
  title: PropType.string.isRequired,
}

export default Choice;