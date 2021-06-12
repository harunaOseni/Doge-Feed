import React from "react";
import Button from "@material-ui/core/Button";
import "./login.css";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../State Provider/Reducer";
import { useStateValue } from "../../State Provider/StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();
  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="app-logo">
        <img
          src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=010"
          alt="Dogecoin-logo"
        />
      </div>
      <Button type="submit" onClick={logIn}>
        SIGN IN
      </Button>
    </div>
  );
}

export default Login;
