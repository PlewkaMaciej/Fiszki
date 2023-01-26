import { Card } from "../types/types";
import { MainContainer, CardContainer, Heading, Paragraph, ShowAnswerButton, ArrowLeftImg, ArrowRightImg, AddNewQuestionButton, MainMenuButton } from "../styles/question/questionStyles";
import React, { useState } from "react";
import ArrowLeft from "../icons/arrowLeft.png"
import ArrowRight from "../icons/arrowRight.png"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStore } from "../store/Store";
import { useEffect } from "react";
function Questions() {
 
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [whichQuestion, setWhichQuestion] = useState<number>(0);
  const card = useStore((state)=>state.card)
  const fetch = useStore((state) => state.fetch)
  const navigate = useNavigate();
  useEffect(()=>{
    fetch()
    },[fetch])  
  const params = useParams<{ id: string }>();
  let cardId: string | undefined;
  if (params.id ) {
    cardId = params.id;
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
            {singleCard.id===cardId&&
              <>
                <AddNewQuestionButton onClick={() => {
                  navigate(`/addQuestions/${cardId}`);
                }}>Add new question to card</AddNewQuestionButton>
                <CardContainer >
                  {singleCard.questions.map((questions, index) => (
                    <React.Fragment key={index}>
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
                    </React.Fragment>
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








