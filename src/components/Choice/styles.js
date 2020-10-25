import styled from 'styled-components';

const ChoiceBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.color};
  cursor: pointer;
  font-size: larger;
  font-weight: 700;
  transition: transform .2s linear;
  margin: 10px 0;
  &:focus {
      color: white;
      background-color: ${props => props.color};
      outline: none;
      transform: scale(0.95);
    }
  &:hover {
    color: white;
    background-color: ${props => props.color};
  }
`;

export default ChoiceBtn;