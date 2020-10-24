import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .button-cotrol {
    padding: 20px 50px;
    font-size: 20px;
    border-radius: 5px;
    margin: 5px 10px;
    width: 100%;
    max-width: 160px;

    color: #fff;
    background-color: #0B7ABF;
    
    transition: opacity .3s linear;
    transition: transform .3s linear;
    outline: none;
    
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    } 

    &:active {
      transform: scale(0.95);
    } 
  }
`;