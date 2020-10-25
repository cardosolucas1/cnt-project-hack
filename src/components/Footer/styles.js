import styled from 'styled-components';

export const FooterStyled = styled.footer`
  align-items: center;
  background-color: #0B7ABF;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
  rgba(0, 0, 0, 0.12) 0px 1px 54px 0px, rgba(0, 0, 0, 0.14) 0px 6px 50px 0px;
  color: white;
  display: flex;
  min-height: 70px;
  justify-content: space-between;
  padding: 10px 20px;
  bottom: 0;
  width: 100%;
  position: fixed;
  overflow: hidden;
  button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #f2f2f2;
    color: white;
    font-size: larger;
    margin-right: 20px;
    padding: 5px;
  }
  button:hover {
    color: #f2f2f2;
    cursor: pointer;
  }
`;

export const InputSection = styled.section`
  input {
    display: none;
  }

  img {
    width: 40px;
    cursor: pointer;
  }
`;