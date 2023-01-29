import styled from "styled-components";
export const MainContainer = styled.div`

    display: flex;
    justify-content:center;
    background-color: #131A22;
    min-height:100vh;
    flex-wrap: wrap;
`

export const ArrowLeftImg = styled.img`
position:absolute;
top:220px;
width :96px;
height:96px;
cursor:pointer;
left:400px;
`
export const ArrowRightImg = styled.img`
position:absolute;
top:220px;
width :96px;
height:96px;
cursor:pointer;
right:400px;
`
export const CardContainer = styled.div`
background-color: white;
border-radius: 5px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
width: 600px;
height: 400px;

&:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
}
white-space: pre-wrap;
margin: 5%;
flex-direction: column;
align-items: center;
text-align: center;
color: #00b0ff;
font-size: 16px;
transition: box-shadow 0.2s infinite;

`


export const Heading = styled.h2`
font-size:32px; color: #00b0ff;  min-width:500px; max-height:50px: font-weight:600; border-bottom: 1px solid #00b0ff;
position:absolute;
bottom:75%;
`
export const Paragraph = styled.p`
font-size:16px;
max-width:300px;
max-height:120px;
color:#131A22;
font-weight:550;
position:relative;
`
export const ShowAnswerButton = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 100px;
  height: 50px;
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
`;
export const AddNewQuestionButton = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  position:absolute;
  top:60%;
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