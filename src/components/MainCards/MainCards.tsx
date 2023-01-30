import {  SingleCardContainer, Heading, Paragraph, BigHeading, SecondContainer,  MainContainer,Container,  AddButton, } from "./mainCardstyles";
import { Card } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/Store";
import { useEffect } from "react";
import Nav from "../Navigation/Nav";

function MainCards() {
  const card = useStore((state) => state.card)
  const fetch = useStore((state) => state.fetch)
  const navigate = useNavigate();
  const checkWhatCardIClicked = (singleCard: Card) => {
    navigate(`/questions/${singleCard.id}`);

  }
useEffect(()=>{
fetch()
},[fetch])  

  return (
    <>
      <MainContainer>
<Nav/>
<SecondContainer>
        <BigHeading> Choose your cards or create a new one </BigHeading>
        <AddButton onClick={() => {
          navigate(`./addNewCard`);
        }}>Add new card</AddButton>
</SecondContainer>
      
      <Container>
        {card.map((singleCard, index) => {
          return (
            <SingleCardContainer
              key={index}
              onClick={() => checkWhatCardIClicked(singleCard)}
            >
              <Heading>{singleCard.title}</Heading>
              <Paragraph>{singleCard.description}</Paragraph>
            </SingleCardContainer>
          )
        })}
      </Container>
      </MainContainer>
    </>
  );
}

export default MainCards;