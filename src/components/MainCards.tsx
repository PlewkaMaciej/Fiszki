import { Container, SingleCardContainer, Heading, Paragraph, BigHeading, SecondContainer, AddButton } from "../styles/mainCard/mainCardstyles";
import { Card } from "../types/types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/Store";

function MainCards() {
  const card = useStore((state)=>state.card)
  const navigate = useNavigate();
  const checkWhatCardIClicked = (singleCard: Card) => {
    navigate(`/questions/${singleCard.id}`);
    
  }
 
  return (
    <>
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
    </>
  );
}

export default MainCards;