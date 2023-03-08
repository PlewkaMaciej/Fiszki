import {   SingleCardContainer,
    Heading,
    Paragraph,
    Container,
    } from "../MainCards/mainCardstyles";
import { Card } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/Store";
import Likes from "../Likes/Likes";
import { useFilteredCards } from "../../UseQuerry/GetFilteredCards";
function FilteredCards() {
  const filterCardsCategory = useStore((state) => state.filterCardsCategory);
  
  const navigate = useNavigate();
 
    const { data: filteredCards, isLoading,isSuccess } = useFilteredCards(filterCardsCategory);
  

  const checkWhatCardIClicked = (singleCard: Card) => {
    navigate(`/questions/${singleCard.id}`);
  }; 

  return (
    <>
    {isLoading&&
    <p>Loading...</p>
    }
      {isSuccess && (
        <>
          {filteredCards.map((singleCard: Card) => {
            return (
              <Container key={singleCard.id}>
                <SingleCardContainer
                  onClick={() => checkWhatCardIClicked(singleCard)}
                >
                  <Heading>{singleCard.title}</Heading>
                  <Paragraph>{singleCard.description}</Paragraph>
                </SingleCardContainer>
                <Likes id={singleCard.id} cards={filteredCards} isSuccess={isSuccess} />
              </Container>
            );
          })}
        </>
      )}
    </>
  );
}

export default FilteredCards;
