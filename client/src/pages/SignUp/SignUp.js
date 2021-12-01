import { useState } from "react";
import axios from "axios";
import { apiURL } from "../../utils/utils";
import "../SignUp/SignUp.scss";
function SignUp() {
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
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="user"
        onChange={(event) => {
          setUserSignUp(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="password"
        onChange={(event) => {
          setPasswordSignUp(event.target.value);
        }}
      ></input>
      <button onClick={signUp}>Sign Up</button>
    </>
  );
}
export default SignUp;
