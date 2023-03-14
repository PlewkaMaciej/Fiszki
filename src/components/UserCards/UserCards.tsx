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
import Nav from "../Navigation/Nav";
import { useQuery } from "react-query";
import { getUserCardsData } from "../../GetApi/GetUserCards";
function MyCards() {
  const userIdLoggedUser = useStore((state) => state.idLoggedUser);
  
  const navigate = useNavigate();
  const checkWhatCardIClicked = (singleCard: Card) => {
    navigate(`/questions/${singleCard.id}`);
  };
  const {
    isLoading,
    data: userCards,
    isSuccess,
  } = useQuery(
    "fetchUserCards",
    () => getUserCardsData(userIdLoggedUser),
    {
      enabled: userIdLoggedUser !== "",
    }
  );

  return (
    <>
      <MainContainer>
        <Nav />
        <SecondContainer>
          <BigHeading> Choose one of cards or create a new one </BigHeading>
            <AddButton
              onClick={() => {
                navigate(`./addNewCard`);
              }}
            >
              Add new card
            </AddButton>
            {isLoading && <Paragraph2>Loading...</Paragraph2>}
        </SecondContainer>
        {isSuccess && (
          <Container>
            {userCards.map((singleCard: Card, index) => {
              return (
                <SingleCardContainer
                  key={singleCard.id}
                  onClick={() => checkWhatCardIClicked(singleCard)}
                >
                  <Heading>{singleCard.title}</Heading>
                  <Paragraph>{singleCard.description}</Paragraph>
                </SingleCardContainer>
              );
            })}
          </Container>
        )}
      </MainContainer>
    </>
  );
}

export default MyCards;
