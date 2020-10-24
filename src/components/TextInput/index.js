import React from 'react';
import SectionInput from './styles';

const TextInput = ({ label }) => 
  <SectionInput>
    <label for="input" type="text"> { label }
    </label>
    <input id="input"/>
  </SectionInput>;

export default TextInput;