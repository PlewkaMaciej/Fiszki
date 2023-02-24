import styled, { keyframes } from "styled-components";
<link
  href="https://fonts.googleapis.com/css2?family=Andika&display=swap"
  rel="stylesheet"
></link>;
const bounce = keyframes`
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(-10px);
}
100% {
  transform: translateY(0);
}
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #131a22;
align-items:center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-directon: column;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  background-color: #131a22;
  flex-direction: column;
  align-items: center;
  text-align:center;
`;
export const MainContainer = styled.div`
  background-color: #131a22;
  min-height: 100vh;
`;

export const SingleCardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  width: 350px;
  height: 200px;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    animation: ${bounce} 0.5s infinite;
    animation-fill-mode: forwards;
  }
  white-space: pre-wrap;
  margin: 5%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: #00b0ff;
  font-size: 16px;
  transition: box-shadow 0.2s infinite;
  @media (max-width: 600px) {
    width: 200px;
    height: 100px;
    font-size: 10px;
  }
`;
export const Heading = styled.h2`
 font-size:32px;
 margin-top:5%;
 max-width:200px;
 max-height:50px:
 font-weight:600;
 border-bottom: 1px solid #00b0ff;
 position:relative;
 bottom:15%;
 @media (max-width: 600px) {
  
  font-size:12px;
 }
`;
export const Paragraph = styled.p`
  font-size: 16px;
  max-width: 300px;
  max-height: 120px;
  color: #131a22;
  font-weight: 550;
  position: relative;
  bottom: 10%;
  @media (max-width: 800px) {
    flex-directon: column;
  }
`;
export const Paragraph2 = styled.p`
  font-size: 16px;
  max-width: 300px;
  max-height: 120px;
  color: white;
  font-weight: 550;
`;
export const BigHeading = styled.h1`
  font-size: 100%;
  color: white;
  margin-top: 3%;
`;

export const AddButton = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  margin-top: 2%;
  width: 300px;
  height: 5%;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s infinite, transform 0.2s infinite;
  @media (max-width: 800px) {
    width: 150px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    animation: ${bounce} 0.5s infinite;
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(1px);
  }
`;
