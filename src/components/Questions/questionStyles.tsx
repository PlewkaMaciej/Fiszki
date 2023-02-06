import styled from "styled-components";
export const MainContainer = styled.div`
 
  background-color: #131a22;
  min-height:100vh;
`;
export const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131a22;

  flex-wrap: wrap;
`
export const ArrowLeftImg = styled.img`
  cursor: pointer;
  top:35%;
  left:15%;
position:fixed;
@media (max-width: 1000px) {
  left:5%;
  }
  @media (max-width: 700px) {
    height:48px;
    width:48px;
   }
`;
export const ArrowRightImg = styled.img`
  cursor: pointer;
  top:35%;
  right:15%;
position:fixed;
@media (max-width: 1000px) {
 right:5%;
 }
 @media (max-width: 700px) {
  height:48px;
  width:48px;
 }
`;
export const CardContainer = styled.div`
top:20%;
position:fixed;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  width: 40%;
  height:50%;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }
  white-space: pre-wrap;

  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #00b0ff;
  font-size: 16px;
  transition: box-shadow 0.2s infinite;
  @media (max-width: 1000px) {
    width:60%;
    height:50%;
    font-size:10px;
   }
   @media (max-width: 700px) {
    width:60%;
    height:40%;
    font-size:10px;
   }
`;

export const Heading = styled.h2`
font-size:32px; color: #00b0ff;  max-width:250px; max-height:50px: font-weight:600; border-bottom: 1px solid #00b0ff;
position:fixed;
top:25%;
@media (max-width: 700px) {
 
    font-size:16px;
   }
`;
export const Paragraph = styled.p`
  font-size: 16px;
  max-width: 300px;
  max-height: 120px;
  color: #131a22;
  font-weight: 550;
  position: relative;
  @media (max-width: 700px) {
    
      font-size:10px;
     }
`;
export const ShowAnswerButton = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s infinite, transform 0.2s infinite;
  margin-top: 5%;
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }
  @media (max-width: 700px) {
  width:100px;
    height:50px;
    font-size:10px;
   }
`;
export const AddNewQuestionButton = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  position:fixed;
  top:75%;
  width: 200px;
  height: 100px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s infinite, transform 0.2s infinite;

  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }
  @media (max-width: 700px) {
   top:70%;
   width:120px;
    height:70px;
    font-size:14px;
   }
`;
