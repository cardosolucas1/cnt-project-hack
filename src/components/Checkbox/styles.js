import styled from 'styled-components';


export const CheckboxContainer = styled.span`
  width: 80%;
  max-width: 500px;
  height: 50px;
  padding-left: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: ${props => props.checked ? '#97C160' : '#E5E5E5'};
  display: flex;
  align-items: center;
  transition: opacity .3s linear;
  transition: transform .3s linear;
  outline: none;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  } 
  
`;
export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
`;
export const Text = styled.label`
    color: ${props => props.checked ? '#FFF' : '#555'};
    margin: 0;
`;

export const StyledCheckbox = styled.label`
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #F6F6F6;
    margin-right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        display: ${props => props.checked ? 'flex' : 'none'};
        filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);
    }
`;