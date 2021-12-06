import { useState } from "react";
import axios from "axios";
import { apiURL } from "../../utils/utils";
import "../SignUp/SignUp.scss";

function SignUp({ history }) {
  const [userSignUp, setUserSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const signUp = () => {
    axios
      .post(`${apiURL}sign-up`, {
        userName: userSignUp,
        password: passwordSignUp,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/");
  };

  return (
    <form className="sign">
      <label className="sign__lbl">CREATE USERNAME</label>
      <input
        type="text"
        className="sign__input"
        placeholder="Create a Username"
        onChange={(event) => {
          setUserSignUp(event.target.value);
        }}
      ></input>
      <label className="sign__lbl">CREATE PASSWORD</label>
      <input
        type="text"
        className="sign__input"
        placeholder="Create a Password"
        onChange={(event) => {
          setPasswordSignUp(event.target.value);
        }}
      ></input>
      <button onClick={signUp} className="sign__btn">
        SIGN UP
      </button>
      <p className="sign__terms">
        By clicking Sign Up, you agree to all Terms.
      </p>
    </form>
  );
}
export default SignUp;
