import { HashRouter, Route, Routes } from "react-router-dom";
import MainCards from "./components/MainCards/MainCards";
import AddCard from "./components/AddCard/AddCard";
import GlobalStyle from "./styles/GlobalStyle";
import Questions from "./components/Questions/Questions";
import AddQuestions from "./components/AddQuestions/AddQuestions";
import Register from "./components/Register/Register";
import Login from "./components/SignIn/LogIn";
import MyCards from "./components/UserCards/UserCards";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainCards />} />
          <Route path="/addNewCard" element={<AddCard />} />
          <Route path="/questions/:id" element={<Questions />} />
          <Route path="/addQuestions/:id" element={<AddQuestions />} />
          <Route path="/register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/myCards" element={<MyCards />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
