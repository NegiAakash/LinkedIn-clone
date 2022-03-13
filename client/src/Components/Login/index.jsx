import React, { useState } from "react";
import { FloatingInput } from "../../Elements/FLoatingInput/FloatingInput";
import { SigninContainer } from "./Signin.styles";
import { useNavigate } from "react-router-dom";
import Google from "../../Assets/Google.svg";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const api_url = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    const res = await axios.post(`${api_url}/user/login`, data);
    localStorage.setItem("token", res.data.token);

    navigate("/");
  };
  return (
    <SigninContainer>
      <div className="wrapper">
        <div className="text">
          <h2>Sign in</h2>
          <p>Stay updated on your professional world</p>
        </div>
        <form>
          <FloatingInput
            type="email"
            name="Email or Phone"
            states={{ get: email, set: setEmail }}
          />
          <FloatingInput
            type="password"
            name="Password"
            states={{ get: password, set: setPassWord }}
          />

          <span
            onClick={() => {
              navigate("#");
            }}
          >
            Forgot Password?
          </span>

          <button
            className="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign in
          </button>
          <div className="seperator">
            <hr />
            or
            <hr />
          </div>

          <button className="google" type="submit">
            <img src={Google} alt="Google" />
            Sign in with Google
          </button>
        </form>
      </div>

      <div className="sign-up">
        New to LinkedIn?{" "}
        <button type="button" onClick={() => navigate("/register")}>
          Join now
        </button>
      </div>
    </SigninContainer>
  );
};

export default Login;
