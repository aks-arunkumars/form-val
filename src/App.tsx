import React, { useState } from "react";
import "./App.css";
import {
  validName,
  validUserName,
  validEmail,
  validPassword,
} from "./regex.js";

function App() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validateAndAlert = () => {
    const nameLength = name.length;
    const userNameLength = userName.length;
    const pswdLength = password.length;
    if (!validName.test(name) || nameLength < 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (!validUserName.test(userName) || userNameLength < 3) {
      setUserNameErr(true);
    } else setUserNameErr(false);

    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validPassword.test(password) || pswdLength < 9) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
    if (
      validName.test(name) &&
      validUserName.test(userName) &&
      validEmail.test(email) &&
      validPassword.test(password)
    ) {
      alert(
        "Registration Successful !" +
          "\n" +
          "Name : " +
          name +
          "\n" +
          "User name : " +
          userName +
          "\n" +
          "Email : " +
          email
      );
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div>
          <input
            type={"text"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={"input-field"}
            placeholder={"Name"}
            required
          />
        </div>
        {nameErr && <p> Invalid name</p>}
        <div>
          <input
            type={"text"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={"input-field"}
            placeholder={"User name"}
            required
          />
        </div>
        {userNameErr && <p> Invalid user name</p>}
        <div>
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"input-field"}
            placeholder={"Email"}
            required
          />
        </div>
        {emailErr && <p>Email is invalid</p>}
        <div>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={"input-field"}
            placeholder={"Password"}
            required
          />
        </div>
        {pwdError && <p>Invalid password</p>}
        <div>
          <button
            type={"submit"}
            className={"button"}
            onClick={validateAndAlert}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
