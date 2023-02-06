import { useState } from "react";
import {
  Input,
  InputContainer,
  Container,
  Label,
  AddButton,
  ErrorParagraph,
} from "../../styles/commonStyles";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/Store";
import Nav from "../Navigation/Nav";

function AddCard() {
  const navigate = useNavigate();
  const idLoggedUser = useStore((state) => state.idLoggedUser);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<boolean | null>(null);
  const addNewCard = useStore((state) => state.addNewCard);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value.length < 6) {
      setTitleError(" must have at least 6 characters");
    } else {
      setTitleError(null);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    if (event.target.value.length < 6) {
      setDescriptionError("must have at least 6 characters");
    } else {
      setDescriptionError(null);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.length >= 6 && description.length >= 6) {
      addNewCard(title, description, idLoggedUser);
      navigate("/");
    }
    if (title.length < 6 && description.length < 6) {
      setSubmitError(true);
    }
  };
  return (
    <>
      <Nav />
    
      <form onSubmit={handleSubmit}>
        <Container>
          <InputContainer>
            <Label htmlFor="title">
              Title&nbsp;{titleError && <p>{titleError}</p>}
            </Label>
            <Input id="title" onChange={handleTitleChange} value={title} />

            <Label htmlFor="description">
              Description&nbsp;{descriptionError && <p>{descriptionError}</p>}
            </Label>
            <Input
              id="description"
              onChange={handleDescriptionChange}
              value={description}
            />
            <AddButton type="submit">Add Card</AddButton>
            {submitError && (
              <ErrorParagraph>
                Please fill in the gaps in the form with the right number of
                characters
              </ErrorParagraph>
            )}
          </InputContainer>
        </Container>
      </form>
    </>
  );
}

export default AddCard;
