import styled from "styled-components"
<link href="https://fonts.googleapis.com/css2?family=Andika&display=swap" rel="stylesheet"></link>
export const Container = styled.div`

    display: flex;
    justify-content:start;
    background-color: #131A22;
    height:100vh;
    flex-wrap: wrap;
`
export const SecondContainer= styled.div`
display:flex;
justify-content:center;
background-color: #131A22;
flex-direction:column;
align-items:center;
`
export const SingleCardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display:flex;
  justify-content:center;
  width: 350px;
  height: 200px;
  white-space: pre-wrap;
  margin:5%;
  flex-direction:column;
  align-items:center;
  text-align:center;
  cursor:pointer;
`
export const Heading = styled.h2`
 font-size:48px;
 margin:5%;
 max-width:300px;
 max-height:50px:
 color:#131A22;
 font-weight:600;
`
export const Paragraph= styled.p`
font-size:16px;
margin:5%;
max-width:300px;
max-height:120px;
color:#131A22;
font-weight:550;
`
export const BigHeading = styled.h1`
font-size:64px;
color:white;
margin-top:3%;
color:white;
`
export const AddButton = styled.button` 
margin-top:2%;
background-color: white;
width:300px;
height:5%;
border: none;
border-radius: 5px;
color: #131A22;
font-weight:600;
font-size: 16px;
padding: 10px 20px;
&:hover {
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
&:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(1px);
}
`;
