import { Card } from "../App";
import { MainContainer, CardContainer, Heading, Paragraph, ShowAnswerButton, ArrowLeftImg, ArrowRightImg } from "../styles/question/questionStyles";
import { useState } from "react";
import ArrowLeft from "../icons/arrowLeft.png"
import ArrowRight from "../icons/arrowRight.png"
interface Props {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}
function Questions(props: Props) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [whichQuestion, setWhichQuestion] = useState<number>(0);
  const { cards, setCards } = props;
  const showAnswerFunction = () => {
    if (!showAnswer) {
      setShowAnswer(true)
    }
    else (
      setShowAnswer(false)
    )
  }
const increaseQuestion = ()=>{
  let newQuestion= whichQuestion+1
  setWhichQuestion(newQuestion)
}
const decreaseQuestion= ()=>{
  let newQuestion=whichQuestion-1
  setWhichQuestion(newQuestion)
}
  return (
    <MainContainer>
      
     
      {whichQuestion!==0&&
        <ArrowLeftImg onClick={decreaseQuestion} src={ArrowLeft} alt="arrowLeft" />
      }

      {cards.map((singleCard: Card, index) => {
        return (
          
          <CardContainer key={index}>
            {whichQuestion<=index&&
 <ArrowRightImg onClick={increaseQuestion} src={ArrowRight} alt="arrowRight" />
      }
            {singleCard.questions.map((questions, index) => (
              <>
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
        )
      })}
    </MainContainer>

  );
}

export default Questions;