import {
  MainContainer,
  CardContainer,
  Heading,
  Paragraph,
  ShowAnswerButton,
  ArrowLeftImg,
  ArrowRightImg,
  AddNewQuestionButton,
  Container,
} from "./questionStyles";
import React, { useState } from "react";
import ArrowLeft from "../../icons/arrowLeft.png";
import ArrowRight from "../../icons/arrowRight.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/Store";
import { useEffect } from "react";
import Nav from "../Navigation/Nav";
import { ObjectOfCards } from "../../types/types";
function Questions() {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [whichQuestion, setWhichQuestion] = useState<number>(0);
  const cards = useStore((state) => state.cards) as ObjectOfCards;
  const userIdLoggedUser = useStore((state) => state.idLoggedUser);
  const fetch = useStore((state) => state.fetch);
  const params = useParams<{ id: string }>();
  let cardId: string = "";
  if (params.id) {
    cardId = params.id;
  }
  const navigate = useNavigate();
  useEffect(() => {
    fetch();
  }, [fetch]);

  const showAnswerFunction = () => {
    if (!showAnswer) {
      setShowAnswer(true);
    } else setShowAnswer(false);
  };
  const increaseQuestion = () => {
    setWhichQuestion(whichQuestion + 1);
    setShowAnswer(false);
  };
  const decreaseQuestion = () => {
    setWhichQuestion(whichQuestion - 1);
    setShowAnswer(false);
  };
  return (
    <>
      <Nav />
      <MainContainer>

      <Container>
        {cards[cardId] && (
          <React.Fragment>
            <>
             
              {whichQuestion !== 0 && (
                <ArrowLeftImg
                  onClick={decreaseQuestion}
                  src={ArrowLeft}
                  alt="arrowLeft"
                />
              )}
              <CardContainer>
                {cards[cardId].questions.length > 0 && (
                  <>
                    <Heading>
                      {cards[cardId].questions[whichQuestion].question}
                    </Heading>
                    {!showAnswer && (
                      <ShowAnswerButton onClick={showAnswerFunction}>
                        ShowAnswer
                      </ShowAnswerButton>
                    )}
                    {showAnswer && (
                      <>
                        <Paragraph>
                          {cards[cardId].questions[whichQuestion].answer}
                        </Paragraph>
                        <ShowAnswerButton onClick={showAnswerFunction}>
                          Hide Answer
                        </ShowAnswerButton>
                      </>
                    )}

                   
                  </>
                )}
              </CardContainer>
              {whichQuestion < cards[cardId].questions.length - 1 && (
                      <ArrowRightImg
                        onClick={increaseQuestion}
                        src={ArrowRight}
                        alt="arrowRight"
                      />
                    )}
            </>
           
          </React.Fragment>
          
        )}
        
      </Container>
      <Container>
      {cards[cardId] && userIdLoggedUser === cards[cardId].Userid && (
                <AddNewQuestionButton
                  onClick={() => {
                    navigate(`/addQuestions/${cardId}`);
                  }}
                >
                  Add new question to card
                </AddNewQuestionButton>
              )}
              </Container>
      </MainContainer>
    </>
  );
}

export default Questions;
