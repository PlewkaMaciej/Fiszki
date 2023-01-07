
import { HashRouter, Route, Routes, } from 'react-router-dom';
import MainCards from './components/MainCards';
import AddCard from './components/AddCard';
import GlobalStyle from './styles/GlobalStyle';
import { useState } from 'react';
import Questions from './components/Questions';
import AddQuestions from './components/AddQuestions';
export interface Card {
  title: string;
  description: string;
  isCardAbleToSee:boolean;
  questions: {  question: string; answer: string;  }[];
}

function App() {
 
  const [cards, setCards] = useState<Card[]>([
    {
      title: "Fiszki Js",
      description: "to jest fiszka do nauki javascript",
      isCardAbleToSee:false,
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
 
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainCards cards={cards} setCards={setCards} />} />
          <Route path="/addNewCard" element={<AddCard cards={cards} setCards={setCards} />} />
          <Route path="/questions/" element={<Questions cards={cards} setCards={setCards} />} />
          <Route path="/addQuestions/:id" element={<AddQuestions cards={cards} setCards={setCards} />} />
        </Routes>
      </HashRouter>
     
    </>
  );
}

export default App;
