import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Auth() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  const users = useSelector((state) => state.adminUsers.users);

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  } 

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log('submit handler auth', enteredEmail, enteredPassword);
    console.log(users);
  }

  return (
    <div className="auth-container">
      <h1>Enter Email and Password</h1>

      <form onSubmit={submitHandler}>
        <input
          type="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={enteredPassword}
        />
        <button>Enter</button>
      </form>
    </div>
  );
}

export default Auth;
