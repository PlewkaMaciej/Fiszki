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
} from "./mainCardstyles";
import { useCards } from "../../UseQuerry/GetCards";
import SortingCards from "../SortingCards/SortingCards";
import { Card } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/Store";
import Nav from "../Navigation/Nav";
import Likes from "../Likes/Likes";
function MainCards() {
  const isCardFiltered = useStore((state) => state.isCardFiltered);
  const filterCards = useStore((state): Record<string, Card> => state.filterCards);
  const isUserLoggedIn = useStore((state) => state.isUserLoggedIn);
  const navigate = useNavigate();
  const { isLoading, error, data: cards, isSuccess } = useCards();
  const checkWhatCardIClicked = (singleCard: Card) => {
    navigate(`/questions/${singleCard.id}`);
  };
  console.log(cards)
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
                navigate(`/addNewCard`);
              }}
            >
              Add new card
            </AddButton>
        
          )}
            
        </SecondContainer>
        
          <SortingCards cards={cards} isSuccess={isSuccess}/>
        
        <Container>
        
          {isLoading && <Paragraph2>Loading...</Paragraph2>}
          {error instanceof Error && <Paragraph>{error.message}</Paragraph>}
          {isSuccess && !isCardFiltered && (
            <>
              {Object.values(cards).map((singleCard, index) => {
                return (
                  <>
                  <Container>
                  <SingleCardContainer
                    key={index}
                    onClick={() => checkWhatCardIClicked(singleCard)}
                  >
                    <Heading>{singleCard.title}</Heading>
                    <Paragraph>{singleCard.description}</Paragraph>
                   
                  </SingleCardContainer>
                  <Likes id={singleCard.id} cards={cards} isSuccess={isSuccess} />
                  </Container>
                  </>
                );
              })}
            </>
          )}
           {isSuccess && isCardFiltered && (
            <>
              {Object.values(filterCards).map((singleCard: Card, index) => {
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
            </>
          )}
        </Container>
      </MainContainer>
    </>
  );
}

export default MainCards;
