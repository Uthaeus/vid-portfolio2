import { useContext, useState } from "react";
import { login } from "../components/util/auth";

import { AuthContext } from "../store/auth-context";

function Auth() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const authCtx = useContext(AuthContext);
  
    const emailIsValid = enteredEmail.length > 3 && enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.length > 6;

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  } 

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  async function loginHandler(email, password) {
    try {
      const token = await login(email, password);
      authCtx.authenicate(token);
    } catch(error) {
      console.log('auth.js loginhandler error', error);
    }
  }

  function submitHandler(event) {
    event.preventDefault();

    if (emailIsValid && passwordIsValid) {
      loginHandler(enteredEmail, enteredPassword);
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
