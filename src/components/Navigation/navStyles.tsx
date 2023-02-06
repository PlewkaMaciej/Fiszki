import styled from "styled-components";

export const RegisterAndLogInContainer = styled.div`
 
display:flex;
align-items:center;
margin-right:5%;
align-text:center;
`;

export const MainButtonContainer = styled.div`
display:flex;
align-items:center
align-text:center

@media (max-width: 580px) {
  margin-right:20px;
  }
`;
export const Button = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 150px;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-top: 20px;
  margin-left:20px;
  margin-right:4px;
  @media (max-width: 580px) {
   width:100px;
   height:45px;
   font-size:12px;
   margin-left:5px;
  }
  @media (max-width: 400px) {
    width:90px;
    height:25px;
    font-size:10px;
    margin-left:5px;
   }
 
`;

export const MainContainer = styled.div`
  background-color: #131a22;
  display:flex;
  align-items:center;
  justify-content:space-between;
  align-text:center;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  max-width: 300px;
  max-height: 120px;
  color: white;
  font-weight: 550;
  @
    @media (max-width: 1000px) {
     font-size:2px;
      }
`;


