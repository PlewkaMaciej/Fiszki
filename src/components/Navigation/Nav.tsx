import { RegisterAndLogInContainer, Button, MainContainer, Paragraph, Container, Button2 } from "./navStyles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Nav() {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(true);
  const [currentUserNickname, setCurrentUserNickname] = useState<string | null>(null);
  const auth = getAuth();
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true)
        setCurrentUserNickname(user.displayName)
      } else {
        setIsUserLoggedIn(false)
      }
    });

  }, [auth])
const logout=()=>{
  auth.signOut();
}


  return (
    <>
      <MainContainer>
        <RegisterAndLogInContainer>
          {isUserLoggedIn === false &&
            <>
              <Button onClick={() => {
                navigate(`./login`);
              }}>Log In</Button>
              <Button onClick={() => {
                navigate(`./register`);
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