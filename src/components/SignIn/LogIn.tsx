import { useState } from "react";
import Nav from "../Navigation/Nav";
import {
  Input,
  InputContainer,
  Container,
  Label,
  AddButton,
  ErrorParagraph,
} from "../../styles/commonStyles";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitDataError, setDataError] = useState<boolean | null>(null);
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.dir(e);
        if (e.message === "Firebase: Error (auth/user-not-found).") {
          setErrorMessage("The user with the specified data does not exist");
          setDataError(true);
        }
      });
  };
  return (
    <>
<Nav/>
      <form onSubmit={handleSubmit}>
        
        <Container>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleTitleChange}
              value={email}
            />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleDescriptionChange}
              value={password}
            />
            <AddButton type="submit">Sign In</AddButton>

            {submitDataError && <ErrorParagraph>{errorMessage}</ErrorParagraph>}
          </InputContainer>
        </Container>
      </form>
    </>
  );
}

export default Login;
