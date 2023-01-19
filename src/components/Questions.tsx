import { Card } from "../types/types";
import { MainContainer, CardContainer, Heading, Paragraph, ShowAnswerButton, ArrowLeftImg, ArrowRightImg, AddNewQuestionButton, MainMenuButton } from "../styles/question/questionStyles";
import React, { useState } from "react";
import ArrowLeft from "../icons/arrowLeft.png"
import ArrowRight from "../icons/arrowRight.png"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStore } from "../store/Store";

function Questions() {
 
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [whichQuestion, setWhichQuestion] = useState<number>(0);
  const card = useStore((state)=>state.card)
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  let cardId: number | undefined;
  if (params.id && !isNaN(Number(params.id))) {
    cardId = parseInt(params.id);
  }
  const backToMainMenu = () => {
    navigate("/")
  }
 
  const showAnswerFunction = () => {
    if (!showAnswer) {
      setShowAnswer(true)
    }
    else (
      setShowAnswer(false)
    )
  }
  const increaseQuestion = () => {
    setWhichQuestion(whichQuestion + 1)
    setShowAnswer(false)


  }
  const decreaseQuestion = () => {
    setWhichQuestion(whichQuestion - 1)
    setShowAnswer(false)
  }
  return (
    <MainContainer>


      <MainMenuButton onClick={backToMainMenu}>Back to main menu</MainMenuButton>
      {card.map((singleCard: Card, index) => {
        return (
          <React.Fragment key={index}>
            {singleCard.id===cardId &&
              <>
                <AddNewQuestionButton onClick={() => {
                  navigate(`/addQuestions/${cardId}`);
                }}>Add new question to card</AddNewQuestionButton>
                <CardContainer >
                  {singleCard.questions.map((questions, index) => (
                    <>
                      {whichQuestion < index &&
                        <ArrowRightImg onClick={increaseQuestion} src={ArrowRight} alt="arrowRight" />
                      }
                      {whichQuestion !== 0 &&
                        <ArrowLeftImg onClick={decreaseQuestion} src={ArrowLeft} alt="arrowLeft" />
                      }
                      {whichQuestion === index &&
                        <>
                          <Heading>{questions.question}</Heading>
                          {!showAnswer &&
                            <ShowAnswerButton onClick={showAnswerFunction}>Show Answer</ShowAnswerButton>
                          }
                          {showAnswer &&
                            <>
                              <Paragraph>{questions.answer}</Paragraph>
                              <ShowAnswerButton onClick={showAnswerFunction}>Hide Answer</ShowAnswerButton>
                            </>
                          }
                        </>
                      }
                    </>
                  ))}
                </CardContainer>
              </>
            }

          </React.Fragment>
        )
      })}

    </MainContainer>
  );
}

export default Questions;








