import {
  SingleCardContainer,
  Heading,
  Paragraph,
  BigHeading,
  SecondContainer,
  MainContainer,
  Container,
  AddButton,
  Paragraph2,
} from "./userCardstyles";
import { Card } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/Store";
import { useEffect } from "react";
import Nav from "../Navigation/Nav";
import { ObjectOfCards } from "../../types/types";
function MyCards() {
  const userIdLoggedUser = useStore((state) => state.idLoggedUser);
  const userCards = useStore((state) => state.userCards) as ObjectOfCards;
  const fetchUserCards = useStore((state) => state.fetchUserCards);
  const isUserLoggedIn = useStore((state) => state.isUserLoggedIn);
  const navigate = useNavigate();
  const checkWhatCardIClicked = (singleCard: Card) => {
    navigate(`/questions/${singleCard.id}`);
  };
  useEffect(() => {
    fetchUserCards(userIdLoggedUser);
  }, [userIdLoggedUser,fetchUserCards]);
  return (
    <>
      <MainContainer>
        <Nav />
        <SecondContainer>
          <BigHeading> Choose one of cards or create a new one </BigHeading>
          {!isUserLoggedIn && (
            <Paragraph2>U need to sign in if u want to add cards</Paragraph2>
          )}

          {isUserLoggedIn && (
            <AddButton
              onClick={() => {
                navigate(`./addNewCard`);
              }}
            >
              Add new card
            </AddButton>
          )}
        </SecondContainer>

        <Container>
          {Object.values(userCards).map((singleCard: Card, index) => {
            return (
              <SingleCardContainer
                key={index}
                onClick={() => checkWhatCardIClicked(singleCard)}
              >
                <Heading>{singleCard.title}</Heading>
                <Paragraph>{singleCard.description}</Paragraph>
              </SingleCardContainer>
            );
          })}
        </Container>
      </MainContainer>
    </>
  );
}

export default MyCards;
