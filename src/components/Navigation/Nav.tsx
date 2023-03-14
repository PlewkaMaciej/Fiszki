import {
  RegisterAndLogInContainer,
  Button,
  MainContainer,
  MainButtonContainer,
} from "./navStyles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../../store/Store";
import { useLocation } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isUserLoggedIn = useStore((state) => state.isUserLoggedIn);
  const setUserLoginIn = useStore((state) => state.setUserLoginIn);

  const setUserIdLoggedIn = useStore((state) => state.setUserIdLoggedIn);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIdLoggedIn(user.uid);
        setUserLoginIn(true);
      } else {
        setUserLoginIn(false);
        setUserIdLoggedIn("");
      }
    });
  }, [auth, setUserIdLoggedIn, setUserLoginIn]);
  const logout = () => {
    auth.signOut();
    navigate(`/`);
  };
  const goToMyCards = () => {
    navigate(`/myCards`);
  };
  const goToMainMenu = () => {
    navigate(`/`);
  };
  return (
    <>
      <MainContainer>
        <MainButtonContainer>
          {location.pathname !== "/" && (
            <Button onClick={goToMainMenu}>Main menu</Button>
          )}
        </MainButtonContainer>
        <RegisterAndLogInContainer>
          {isUserLoggedIn === false && (
            <>
              <Button
                onClick={() => {
                  navigate(`/login`);
                }}
              >
                Log In
              </Button>
              <Button
                onClick={() => {
                  navigate(`/register`);
                }}
              >
                Register
              </Button>
            </>
          )}
          {isUserLoggedIn === true && (
            <>
              {location.pathname !== "/myCards" && (
                <Button onClick={goToMyCards}>Go to my cards</Button>
              )}
              <Button onClick={logout}>Log out</Button>
            </>
          )}
        </RegisterAndLogInContainer>
      </MainContainer>
    </>
  );
}

export default Nav;
