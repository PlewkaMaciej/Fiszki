import { Card } from "../App";
import { useState } from "react";
import { Input, InputContainer, Container, Label, AddButton, ErrorParagraph ,MainMenuButton} from "../styles/addQuestion/addQuestion";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  
}
function AddQuestions(props: Props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cards, setCards } = props;
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [titleError, setTitleError] = useState<string | null>(null);
    const [descriptionError, setDescriptionError] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<boolean | null>(null);
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
      if (event.target.value.length < 6) {
        setTitleError(" must have at least 6 characters");
      } else {
        setTitleError(null);
      }
  
    };
    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
      if(event.target.value.length<6){
        setDescriptionError("must have at least 6 characters")
      } else{
        setDescriptionError(null)
      }
     
    };
    const backToMainMenu=()=>{
      navigate(`/`);
    }
    const handleSubmit = () => {
        if (title.length >= 6 && description.length >= 6) {
            setCards((prevCards: Card[]) => {
                const updatedCards = prevCards.map((card: Card,index) => {
                  if (index.toString() === id) {
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
                console.log(updatedCards)
                return updatedCards;
          });
          navigate(`/questions`);
        }
        if (title.length < 6 && description.length < 6) {
          setSubmitError(true);
        }
      };
  return (
    <>
      <Container>
        <InputContainer>
        <MainMenuButton onClick={backToMainMenu}>Back to main menu</MainMenuButton>
          <Label htmlFor="title" >Question&nbsp;{titleError &&<p>{ titleError}</p>  
          }
          
          </Label>
          <Input id="title" onChange={handleTitleChange} value={title} />

          <Label htmlFor="description">Answer&nbsp;{descriptionError&&<p>{descriptionError}</p>}</Label>
          <Input id="description" onChange={handleDescriptionChange} value={description} />
          <AddButton onClick={handleSubmit} type="submit">Add new Question</AddButton>
          {submitError&& <ErrorParagraph>Please fill in the gaps in the form</ErrorParagraph>}

        </InputContainer>

      </Container>
    </>

  );
}

export default AddQuestions;