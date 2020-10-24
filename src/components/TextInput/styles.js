import styled from 'styled-components';


const SectionInput = styled.section`
  border-bottom: 5px solid #04618C;

  input {
    background-color: transparent;
    border: none;
    margin: 8px 0;
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