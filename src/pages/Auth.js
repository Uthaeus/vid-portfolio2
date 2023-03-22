import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Auth() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const user = useSelector((state) => state.adminUsers);
    const dispatch = useDispatch();

    let titleAlert, newUser;

    if (user.email === '') {
        newUser = true;
        titleAlert = <p>Setting New User</p>;
    }

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  } 

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log('submit handler auth', enteredEmail, enteredPassword);
    console.log(user.email);
  }

  return (
    <div className="auth-container">
      <h1>Enter Email and Password</h1>
      {newUser && titleAlert}

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
