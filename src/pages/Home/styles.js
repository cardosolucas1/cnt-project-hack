import styled from 'styled-components';
import rodovia from '../../images/rodovia.jpeg';

const Container = styled.section`
  align-items: center;
  background-image: url(${rodovia});
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  min-height: 500px;
  width: 100%;
`;

export default Container;