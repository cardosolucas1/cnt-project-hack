import styled from 'styled-components';


const SectionInput = styled.section`
  border-bottom: 5px solid #04618C;
  margin-top: 90px;
  margin-bottom: 20px;
  input {
    background-color: transparent;
    border: none;
    width: 100%;
  }

  input:focus {
    outline: 0;
  }

  label { 
    font-weight: 700;
  }
`;

export default SectionInput;