import { useState } from "react";
import { Input, InputContainer, Container, Label, AddButton, ErrorParagraph, MainMenuButton, } from "../../styles/commonStyles";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../store/Store";
import Nav from "../Navigation/Nav";

function AddQuestions() {

  const card = useStore((state) => state.card)
  const { id } = useParams();

  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<boolean | null>(null);
  const addQuestionToCard = useStore((state) => state.addQuestionToCard)
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
    if (event.target.value.length < 6) {
      setDescriptionError("must have at least 6 characters")
    } else {
      setDescriptionError(null)
    }

  };
  const backToMainMenu = () => {
    navigate(`/`);
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title.length >= 6 && description.length >= 6 && id) {
      addQuestionToCard(id, title, description,card);
      navigate(`/questions/${id}`);
    }
    if (title.length < 6 && description.length < 6) {
      setSubmitError(true);
    }
  };
  return (
    <>
    <Nav/>
      <MainMenuButton onClick={backToMainMenu}>Back to main menu</MainMenuButton>
      <form onSubmit={  handleSubmit}>
        <Container>
          <InputContainer>

            <Label htmlFor="title" >Question&nbsp;{titleError && <p>{titleError}</p>
            }

            </Label>
            <Input name="title" id="title" onChange={handleTitleChange} value={title} />

            <Label htmlFor="description">Answer&nbsp;{descriptionError && <p>{descriptionError}</p>}</Label>
            <Input name="description" id="description" onChange={handleDescriptionChange} value={description} />
            <AddButton type="submit">Add new Question</AddButton>
            {submitError && <ErrorParagraph>Please fill in the gaps in the form with the right number of characters</ErrorParagraph>}

          </InputContainer>

        </Container>
      </form>
    </>

  );
}

export default AddQuestions;