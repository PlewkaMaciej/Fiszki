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
import { db } from "../../FirebaseConfig/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<boolean | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    if (event.target.value.length < 6) {
      setNicknameError("must have at least 6 characters");
    } else {
      setNicknameError(null);
    }
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      setPasswordError("must have at least 6 characters");
    } else {
      setPasswordError(null);
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.length >= 6 && nickname.length >= 6) {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            if (user) {
              updateProfile(user, {
                displayName: nickname,
              });
              setDoc(doc(db, "users", user.uid), {
                email: email,
                nickname: nickname,
              });
              navigate("/");
            }
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
    if (password.length < 6 && nickname.length < 6) {
      setSubmitError(true);
    }
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

            <Label htmlFor="password">
              Password&nbsp;{passwordError && <p>{passwordError}</p>}
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleDescriptionChange}
              value={password}
            />
            <Label htmlFor="nickname">
              Nickname&nbsp;{nicknameError && <p>{nicknameError}</p>}
            </Label>
            <Input
              name="nickname"
              id="nickname"
              onChange={handleNicknameChange}
              value={nickname}
            />
            <AddButton type="submit">Register</AddButton>
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

export default Register;
