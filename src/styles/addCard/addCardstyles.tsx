import styled from "styled-components"

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
background-color: #131A22;
min-height:100vh;
`
export const Label = styled.label`

font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top:5%;
  color:White;
  display: flex;
`
export const ErrorParagraph = styled.p`

font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top:5%;
  color:White;
  display: flex;
`
export const Input = styled.input`

width: 100%;
height: 32px;
padding: 0 10px;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 14px;
outline: none;
`
export const InputContainer = styled.div`

display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  width:20%;
  margin-bottom:10%;
`
export const AddButton = styled.button` 
margin-top: 2%;
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 300px;
  height: 5%;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-top:10%;
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
`;
export const MainMenuButton = styled.button` 
position:absolute;
bottom:90%;
right:70%;
margin-top: 2%;
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 300px;
  height: 5%;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-top:10%;
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
`;