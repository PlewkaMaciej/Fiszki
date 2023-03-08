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
import { useCards } from "../../UseQuerry/GetCards";
import React, { useState } from "react";
import ArrowLeft from "../../icons/arrowLeft.png";
import ArrowRight from "../../icons/arrowRight.png";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/Store";
import Nav from "../Navigation/Nav";
import { useEffect } from "react";
import { Card } from "../../types/types";

function Questions() {
  const [currentCard, setCurrentCard] = useState<Card>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [whichQuestion, setWhichQuestion] = useState<number>(0);
  const { data: cards, isSuccess } = useCards();
  const userIdLoggedUser = useStore((state) => state.idLoggedUser);
  

  const params = useParams<{ id: string }>();
  let cardId: string = "";
  if (params.id) {
    cardId = params.id;
  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(isSuccess){
     const currentCard = cards.find((card) => card.id === cardId);
     setCurrentCard(currentCard)
    } 
   },[isSuccess,cardId,cards])
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
        {isSuccess && (
          <>
            <Container>
              {currentCard && (
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
                      {currentCard.questions.length > 0 && (
                        <>
                          <Heading>
                            {currentCard.questions[whichQuestion].question}
                          </Heading>
                          {!showAnswer && (
                            <ShowAnswerButton onClick={showAnswerFunction}>
                              ShowAnswer
                            </ShowAnswerButton>
                          )}
                          {showAnswer && (
                            <>
                              <Paragraph>
                                {currentCard.questions[whichQuestion].answer}
                              </Paragraph>
                              <ShowAnswerButton onClick={showAnswerFunction}>
                                Hide Answer
                              </ShowAnswerButton>
                            </>
                          )}
                        </>
                      )}
                    </CardContainer>
                    {whichQuestion < currentCard.questions.length - 1 && (
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
              {currentCard && userIdLoggedUser === currentCard.Userid && (
                <AddNewQuestionButton
                  onClick={() => {
                    navigate(`/addQuestions/${cardId}`);
                  }}
                >
                  Add new question to card
                </AddNewQuestionButton>
              )}
            </Container>
          </>
        )}
      </MainContainer>
    </>
  );
}

export default Questions;
