import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #131a22;
  min-height: 100vh;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 5%;
  color: White;
  display: flex;
`;

export const ErrorParagraph = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 5%;
  color: White;
  display: flex;
`;
export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-bottom: 10%;
  image.pngimage.png
  
`;
export const AddButton = styled.button`
  margin-top: 4%;
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 300px;
  height: 5%;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-top: 10%;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }
  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

export const SelectLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 10%;
  color: white;
  display: flex;
`;

export const Select = styled.select`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
`;

export const Option = styled.option`
  font-size: 14px;
`;
