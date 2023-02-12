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
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [submitDataError, setDataError] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handleSubmit = async (values: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
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
      <Nav />
      <Form
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Container>
              <InputContainer>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <Label htmlFor="email">
                        <span>
                          Email{" "}
                          {meta.error && meta.touched && (
                            <ErrorParagraph>{meta.error}</ErrorParagraph>
                          )}
                        </span>
                      </Label>
                      <Input {...input} id="email" type="email" />
                    </>
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <>
                      <Label htmlFor="password">
                        <span>
                          Password{" "}
                          {meta.error && meta.touched && (
                            <ErrorParagraph>{meta.error}</ErrorParagraph>
                          )}
                        </span>
                      </Label>
                      <Input {...input} id="password" type="password" />
                    </>
                  )}
                </Field>

                <AddButton type="submit">Sign In</AddButton>

                {submitDataError && (
                  <ErrorParagraph>{errorMessage}</ErrorParagraph>
                )}
              </InputContainer>
            </Container>
          </form>
        )}
      />
    </>
  );
}

export default Login;
