import { RegisterAndLogInContainer, Button, MainContainer, Paragraph, Container, Button2 } from "./navStyles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "../../store/Store";

function Nav() {
  const navigate = useNavigate();

  const [currentUserNickname, setCurrentUserNickname] = useState<string | null>(null);
  const isUserLoggedIn = useStore((state) => state.isUserLoggedIn)
  const setUserLoginIn = useStore((state) => state.setUserLoginIn)

  const setUserIdLoggedIn = useStore((state) => state.setUserIdLoggedIn)
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIdLoggedIn(user.uid)
        setUserLoginIn(true)
        setCurrentUserNickname(user.displayName)
      } else {
        setUserLoginIn(false)
        setUserIdLoggedIn("")
      }
    });
  }, [auth, setUserIdLoggedIn, setUserLoginIn])
  const logout = () => {
    setUserIdLoggedIn("")
    setUserLoginIn(false)
    auth.signOut();
  }

  return (
    <>
      <MainContainer>
        <RegisterAndLogInContainer>
          {isUserLoggedIn === false &&
            <>
              <Button onClick={() => {
                navigate(`/login`);
              }}>Log In</Button>
              <Button onClick={() => {
                navigate(`/register`);
              }}>Register</Button>
            </>
          }
          {isUserLoggedIn === true &&
            <>
              <Container>
                <Paragraph>Logged in as {currentUserNickname}</Paragraph>
                <Button2 onClick={logout}>Log out</Button2>
              </Container>
            </>
          }
        </RegisterAndLogInContainer>
      </MainContainer>
    </>
  );
}

export default Nav;