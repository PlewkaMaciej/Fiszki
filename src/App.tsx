
import { HashRouter, Route, Routes, } from 'react-router-dom';
import MainCards from './components/MainCards';
import AddCard from './components/AddCard';
import GlobalStyle from './styles/GlobalStyle';
import { useState } from 'react';
import Questions from './components/Questions';
import AddQuestions from './components/AddQuestions';
import { Card } from './types/types';


function App() {
  const [cards, setCards] = useState<Card[]>([
    {
      title: "Fiszki Js",
      description: "to jest fiszka do nauki javascript",
      id:new Date().getTime(),
      questions: [
        {
    
          question: "czy warto sie uczyc js",
          answer: "tak warto",
        },
        {
         
          question:"trtrtrtr",
          answer:"trtrtr",
        }
      ],
    },
  ]);
  const addNewCard=(title:string,description:string)=>{
    const newCard: Card = {
      title: title,
      description: description,
      id:new Date().getTime(),
      questions: [],
      
    };
    setCards([...cards, newCard]);
  }
 const addQuestionToCard=(id: string , title: string, description: string)=>{
  setCards((prevCards: Card[]) => {
    const updatedCards = prevCards.map((card: Card,index) => {
      if (card.id.toString() === id) {
        return {
          ...card,
          questions: [
            ...card.questions,
            { id:index, question: title, answer: description },
          ],
        };
      }
      return card;
    });
    return updatedCards;
});
 }
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainCards cards={cards}  />} />
          <Route path="/addNewCard" element={<AddCard  addNewCard={addNewCard} />} />
          <Route path="/questions/:id" element={<Questions cards={cards}  />} />
          <Route path="/addQuestions/:id" element={<AddQuestions   addQuestionToCard={addQuestionToCard} />} />
        </Routes>
      </HashRouter>
     
    </>
  );
}

export default App;
