
import { HashRouter, Route,Routes } from 'react-router-dom';
import MainCards from './components/MainCards';
import AddCard from './components/AddCard';
import GlobalStyle from './styles/GlobalStyle';
import { useState } from 'react';
export interface Card {
  title: string;
  description: string;
  questions: { question: string; answer: string; canIseeAnswer: boolean }[];
}

function App() {
  const [cards, setCards] = useState<Card[]>([
    {
      title: "Fiszki Js",
      description: "to jest fiszka do nauki jsasdasdasda3242sdasdasdassadsada asdasdasdasdasdadas",
      questions: [
        {
          question: "czy warto sie uczyc js",
          answer: "tak warto",
          canIseeAnswer: false,
        },
      ],
    },
  ]);
  return (
    <>
    <GlobalStyle/>
    <HashRouter>
      <Routes>
    <Route  path="/" element={<MainCards  cards={cards} />} />
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
