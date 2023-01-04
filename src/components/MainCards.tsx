import { Container, SingleCardContainer, Heading, Paragraph, BigHeading, SecondContainer, AddButton } from "../styles/mainCard/mainCardstyles";
import { Link } from "react-router-dom";
import { Card } from "../App";
interface Props {
  cards: Card[];
}
function MainCards(props: Props) {
  const { cards } = props;
  return (
    <>
      <SecondContainer>
        <BigHeading> Choose your cards or create a new one </BigHeading>
        <Link to={{ pathname: '/addNewCard' }}>
        <AddButton>Add new card</AddButton>
        </Link>
      </SecondContainer>
      <Container>
        {cards.map((singleCard, index) => {
          return (
            <SingleCardContainer key={index}>
              <Heading >{singleCard.title}</Heading>
              <Paragraph>{singleCard.description}</Paragraph>
            </SingleCardContainer>
          )
        })}
      </Container>
    </>
  );
}

export default MainCards;