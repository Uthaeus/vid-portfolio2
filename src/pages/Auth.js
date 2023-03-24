import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../store/auth-context";
import { auth } from "../components/util/firebase";

function Auth() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  
    const emailIsValid = enteredEmail.length > 3 && enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.length > 6;

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  } 

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (emailIsValid && passwordIsValid) {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword).then((userCredential) => {
        const token = userCredential._tokenResponse.idToken;
        authCtx.authenicate(token);
        navigate('/');
      }).catch(error => {
        console.log("signInWithEmailAndPassword Error", error.code, error.message);
      })
    }
  }

  return (
    <div className="auth-container">
      <h1>Enter Email and Password</h1>

      <form onSubmit={submitHandler}>
        <input
          type="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          placeholder='homersimpson@fakemail.net'
        />
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={enteredPassword}
          placeholder='password'
        />
        
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}

export default Auth;
