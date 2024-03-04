import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  margin-top:-100px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  margin-top: 20px;
  position: relative;
  left: -50px;
  text-align: left;
  width: 130px;
  font-size:20px;
`;

export const Img = styled.img`
  margin: auto;
  margin-bottom: -20px;
  display: block;
`;

export const Input = styled.input`
  width: 200px;
  border:2px solid #A4D3FF;
  border-radius: 10px;
  padding:5px;
  margin-top: 10px;
  background-color: #D9D9D9;

`;
export const Button = styled.button`
  margin-top: 500px;
  width: 200px;
  border:2px solid #A4D3FF;
  border-radius: 10px;
  padding:5px;
  margin-top: 10px;
  background-color: #A4D3FF;
  color:white;
  &:hover {
    transform: scale(1.05);
  }
`;
