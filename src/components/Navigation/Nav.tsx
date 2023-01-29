import {  RegisterAndLogInContainer,Button,MainContainer} from "./navStyles";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Nav() {

  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);


  return (
    <>
      <MainContainer>
<RegisterAndLogInContainer>
<Button >Log In</Button>
<Button onClick={() => {
          navigate(`./register`);
        }}>Register</Button>
</RegisterAndLogInContainer>
      </MainContainer>
    </>
  );
}

export default Nav;