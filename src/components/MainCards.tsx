import { Container, SingleCardContainer, Heading, Paragraph, BigHeading, SecondContainer, AddButton } from "../styles/mainCard/mainCardstyles";
import { Card } from "../App";
import { useNavigate } from "react-router-dom";
interface Props {
  cards: Card[];

}
function MainCards(props: Props) {
  
  const navigate = useNavigate();
  const { cards} = props;
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