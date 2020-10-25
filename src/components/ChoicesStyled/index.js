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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0;
    width: 80%;
    max-width: 500px;
  }
  h2 {
    text-align: center;
  }
`;

export default Container;