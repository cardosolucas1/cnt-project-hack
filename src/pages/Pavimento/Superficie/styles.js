import styled from 'styled-components';

const Container = styled.section`
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 5%;
  min-height: 400px;
  width: 95%;
  div {
    display: inline-block;
    text-align: center;
  }
  section {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    width: 60%;
  }
`;

export default Container;