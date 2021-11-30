import React, { useState } from "react";
import "../Login/Login.scss";

function Login() {
  const [values, setValues] = useState({
    user: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleUser = (event) => {
    setValues({ ...values, user: event.target.value });
  };

  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.user && values.password) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <main className="login">
      <form
        className="login__form"
        onSubmit={handleSubmit}
        method="post"
        action="http://localhost:8080"
      >
        <label htmlFor="user" className="login__lbl">
          USERNAME
        </label>
        <input
          type="text"
          className="login__input"
          value={values.user}
          name="user"
          disabled={submitted}
          onChange={handleUser}
          placeholder="Username"
        />
        {submitted && !values.user ? (
          <span>Please enter a username</span>
        ) : null}
        <label htmlFor="password" className="login__lbl">
          PASSWORD
        </label>
        <input
          type="text"
          className="login__input"
          value={values.password}
          name="password"
          disabled={submitted}
          onChange={handlePassword}
          placeholder="Password"
        />
        {submitted && !values.password ? (
          <span>Please enter a password</span>
        ) : null}
        <input
          type="submit"
          value="Login"
          onClick={handleSubmit}
          className="login__btn"
        />
      </form>
    </main>
  );
}
export default Login;
