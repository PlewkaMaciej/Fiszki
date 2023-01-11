import { Card } from "../App";
import { useState } from "react";
import { Input, InputContainer, Container, Label, AddButton, ErrorParagraph ,MainMenuButton} from "../styles/addQuestion/addQuestion";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  
}
function AddQuestions(props: Props) {
  let selectedCard:Card;
    const { id } = useParams();
    const navigate = useNavigate();
    const {  setCards } = props;
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
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
        if (title.length >= 6 && description.length >= 6) {
            setCards((prevCards: Card[]) => {
                const updatedCards = prevCards.map((card: Card,index) => {
                  if (card.id.toString() === id) {
                    selectedCard = card;
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
                navigate(`/questions/${selectedCard.id}`);
                return updatedCards;
          });
          
        }
        if (title.length < 6 && description.length < 6) {
          setSubmitError(true);
        }
      };
  return (
    <>
    <MainMenuButton onClick={backToMainMenu}>Back to main menu</MainMenuButton>
    <form onSubmit={(e) => handleSubmit(e)}>
      <Container>
        <InputContainer>
        
          <Label htmlFor="title" >Question&nbsp;{titleError &&<p>{ titleError}</p>  
          }
          
          </Label>
          <Input name="title" id="title" onChange={handleTitleChange} value={title} />

          <Label htmlFor="description">Answer&nbsp;{descriptionError&&<p>{descriptionError}</p>}</Label>
          <Input name="description" id="description" onChange={handleDescriptionChange} value={description} />
          <AddButton  type="submit">Add new Question</AddButton>
          {submitError&& <ErrorParagraph>Please fill in the gaps in the form</ErrorParagraph>}

        </InputContainer>

      </Container>
      </form>
    </>

  );
}

export default AddQuestions;