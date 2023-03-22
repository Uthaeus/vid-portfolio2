import { useState } from "react";


function Auth() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  
    const emailIsValid = enteredEmail.length > 3 && enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.length > 4;

    
    

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  } 

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    
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
