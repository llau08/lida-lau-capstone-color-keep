import React, { useState } from "react";
import "../Login/Login.scss";

function Login() {
  return (
    <main className="login">
      <form className="login__form">
        <label htmlFor="user" className="login__lbl">
          USERNAME
        </label>
        <input type="text" className="login__input" placeholder="Username" />
        <label htmlFor="password" className="login__lbl">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          className="login__input"
        />
        <input type="submit" className="login__btn" value="Login" />
      </form>
    </main>
  );
}

export default Login;
