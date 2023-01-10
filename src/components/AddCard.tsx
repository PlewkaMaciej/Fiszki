import { useState } from "react";
import { Card } from "../App";
import { Input, InputContainer, Container, Label, AddButton, ErrorParagraph ,MainMenuButton} from "../styles/addCard/addCardstyles";
import { useNavigate } from "react-router-dom";
interface Props {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

function AddCard(props: Props) {
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
  const backToMainMenu= ()=>{
navigate("/")
  }
  const handleSubmit = () => {
    if (title.length >= 6 && description.length >= 6) {
      const newCard: Card = {
        title: title,
        description: description,
        isCardAbleToSee:false,
        questions: [],
      };
      setCards([...cards, newCard]);
      navigate("/");
    }
    if (title.length < 6 && description.length < 6) {
setSubmitError(true)

    }
  };
  return (

    <>
      <Container>
        <InputContainer>
        <MainMenuButton onClick={backToMainMenu}>Back to main menu</MainMenuButton>
          <Label htmlFor="title" >Title&nbsp;{titleError &&<p>{ titleError}</p>  
          }
          
          </Label>
          <Input id="title" onChange={handleTitleChange} value={title} />

          <Label htmlFor="description">Description&nbsp;{descriptionError&&<p>{descriptionError}</p>}</Label>
          <Input id="description" onChange={handleDescriptionChange} value={description} />
          <AddButton onClick={handleSubmit} type="submit">Add Card</AddButton>
          {submitError&& <ErrorParagraph>Please fill in the gaps in the form</ErrorParagraph>}

        </InputContainer>

      </Container>
    </>
  );
}

export default AddCard;