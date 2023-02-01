import { MainContainer, CardContainer, Heading, Paragraph, ShowAnswerButton, ArrowLeftImg, ArrowRightImg, AddNewQuestionButton, } from "./questionStyles";
import { MainMenuButton, } from "../../styles/commonStyles";
import React, { useState } from "react";
import ArrowLeft from "../../icons/arrowLeft.png"
import ArrowRight from "../../icons/arrowRight.png"
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

  const fetch = useStore((state) => state.fetch)
  const params = useParams<{ id: string }>();
  let cardId: string =""
  if (params.id ) {
    cardId = params.id;
  }
  const navigate = useNavigate();
  useEffect(() => {
    fetch()
  }, [fetch])

  const backToMainMenu = () => {
    navigate("/")
  }

  const showAnswerFunction = () => {
    if (!showAnswer) {
      setShowAnswer(true)
      console.log(cards)
    }
    else (
      setShowAnswer(false)
    )
  }
  const increaseQuestion = () => {
    setWhichQuestion(whichQuestion + 1)
    setShowAnswer(false)
console.log(cards[cardId].questions.length)
console.log(whichQuestion)

  }
  const decreaseQuestion = () => {
    setWhichQuestion(whichQuestion - 1)
    setShowAnswer(false)
  }
  return (
    <>
      <Nav />
      <MainContainer>


        <MainMenuButton onClick={backToMainMenu}>Back to main menu</MainMenuButton>
            <React.Fragment>
              <>
             
                <AddNewQuestionButton onClick={() => {
                  navigate(`/addQuestions/${cardId}`);
                }}>Add new question to card</AddNewQuestionButton>
                <CardContainer >
                  
                  {cards[cardId].questions.length>0&&
<>
                  
                    <Heading>{cards[cardId].questions[whichQuestion].question}</Heading>
                    {!showAnswer&&
                     <ShowAnswerButton onClick={showAnswerFunction}>ShowAnswer</ShowAnswerButton>

                 }
                 {showAnswer&&
                 <>
                  <Paragraph>{cards[cardId].questions[whichQuestion].answer}</Paragraph>
                  <ShowAnswerButton onClick={showAnswerFunction}>Hide Answer</ShowAnswerButton>
                  </>
                 }
                      {whichQuestion !==0 &&
                      <ArrowLeftImg onClick={decreaseQuestion} src={ArrowLeft} alt="arrowLeft" />
                      }
                     
                      {whichQuestion < cards[cardId].questions.length - 1  &&
                       <ArrowRightImg onClick={increaseQuestion} src={ArrowRight} alt="arrowRight" />
                      }
                  </>
                    }
                </CardContainer>
              </>


            </React.Fragment>
          
       

      </MainContainer>
    </>
  );
}

export default Questions;








