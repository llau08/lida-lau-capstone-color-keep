import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../../utils/utils";
import "../Login/Login.scss";

function Login({ history }) {
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  const tryLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${apiURL}login`, {
        userName: userLogin,
        password: passwordLogin,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data);
        // setIsLoggedIn(true);
        console.log(res);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const getToken = () => {
  //   const token = sessionStorage.getItem("token");

  //   axios
  //     .get(profileUrl, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({ userInfo: res.data, isLoading: false });
  //     });
  // };
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
          value="Login"
          onClick={tryLogin}
          className="login__btn"
        ></input>
      </form>
    </main>
  );
}

export default Login;
