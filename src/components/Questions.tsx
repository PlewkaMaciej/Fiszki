import { Card } from "../App";
import { MainContainer, CardContainer, Heading, Paragraph, ShowAnswerButton } from "../styles/question/questionStyles";
import { useState } from "react";
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
    cards.map((singleCard: Card, index) => {
      return (
        console.log(singleCard.questions.length)

      )
    })
  }

  return (
    <MainContainer>
      {cards.map((singleCard: Card, index) => {
        return (
          <CardContainer key={index}>
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