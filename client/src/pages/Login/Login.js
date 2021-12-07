import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiURL } from "../../utils/utils";
import "../Login/Login.scss";

function Login({ history }) {
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const tryLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${apiURL}login`, {
        userName: userLogin,
        password: passwordLogin,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        console.log(res);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="login">
      <form className="login__form">
        <label className="login__lbl">USERNAME</label>
        <input
          type="text"
          name="username"
          className="login__input"
          placeholder="Username"
          onChange={(event) => {
            setUserLogin(event.target.value);
          }}
        />
        <label className="login__lbl">PASSWORD</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login__input"
          onChange={(event) => {
            setPasswordLogin(event.target.value);
          }}
        />
        <input
          type="submit"
          value="LOGIN"
          onClick={tryLogin}
          className="login__btn"
        ></input>
      </form>
      <Link to="/sign-up">
        <button className="login__btn--signup">SIGN UP</button>
      </Link>
    </main>
  );
}

export default Login;
