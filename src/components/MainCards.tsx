import { Container, SingleCardContainer, Heading, Paragraph, BigHeading, SecondContainer, AddButton } from "../styles/mainCard/mainCardstyles";
import { Card } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
interface Props {
  cards: Card[];
  setCards: (cards: Card[]) => void;

}
function MainCards(props: Props) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/'){
      setCards(cards.map(card => ({...card, isCardAbleToSee: false})))
    };
  }, [window.location.pathname]);
  const navigate = useNavigate();
  const { cards, setCards } = props;
  const checkWhatCardIClicked = (singleCard: Card) => {
    const newCards = cards.map((card) => {
      if (card === singleCard) {
        return { ...card, isCardAbleToSee: true };
      }
      return card;
    });
    setCards(newCards);
   
      navigate("/questions/");
    
  }
 
  return (
    <>
      <SecondContainer>
        <BigHeading> Choose your cards or create a new one </BigHeading>
        <AddButton onClick={() => {
          navigate("./addNewCard");
        }}>Add new card</AddButton>

      </SecondContainer>
      <Container>
        {cards.map((singleCard, index) => {
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
    </>
  );
}

export default MainCards;