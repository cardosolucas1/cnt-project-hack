import React from 'react';
import PropType from 'prop-types';
import ChoiceBtn from './styles';

const Choice = ({ title, color, value }) => {
  return (
    <ChoiceBtn
      color={color}
      onClick={() => console.log(`Opção ${title} escolhida`)}
      onMouseOut={() => console.log(`Opção ${title} retirada`)}
    >
      {title}
    </ChoiceBtn>
  );
};

Choice.PropType = {
  title: PropType.string.isRequired,
  color: PropType.string.isRequired,
}

export default Choice;