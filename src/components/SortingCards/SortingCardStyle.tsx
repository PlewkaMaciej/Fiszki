import styled from "styled-components";
export const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom:2%;
`;
export const Container = styled.div`
margin-top:5%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
export const FiltrButton = styled.button`
  background: linear-gradient(to right, #00b0ff, #0091ea);
  width: 300px;
  height: 5%;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
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