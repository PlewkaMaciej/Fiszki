
import { HashRouter, Route, Routes, } from 'react-router-dom';
import MainCards from './components/MainCards';
import AddCard from './components/AddCard';
import GlobalStyle from './styles/GlobalStyle';
import Questions from './components/Questions';
import AddQuestions from './components/AddQuestions';



function App() {
 
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainCards/>} />
          <Route path="/addNewCard" element={<AddCard  />} />
          <Route path="/questions/:id" element={<Questions />} />
          <Route path="/addQuestions/:id" element={<AddQuestions />} />
        </Routes>
      </HashRouter>
     
    </>
  );
}

export default App;
