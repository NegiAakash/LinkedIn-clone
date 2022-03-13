import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingInput } from "../../Elements/FLoatingInput/FloatingInput";
import { RegisterWrapper } from "./Register.styles";
import Google from "../../Assets/Google.svg";
import Logo from "../SVGs/Logo.svg";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const api_url = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { email: email, password: password };

    const res = await axios.post(`${api_url}/user/`, body);

    // console.log(api_url);
    if (res) {
      alert("User added successfully");
      navigate("/");
    } else {
      console.log("Error ");
    }
  };
  //
  return (
    <RegisterWrapper>
      <div className="logo">
        <Logo color="#0A66C2" />
      </div>
      <div className="top-heading">Make the most of your professional life</div>
      <div className="wrapper">
        <form>
          <FloatingInput
            type="email"
            name="Email or Phone"
            states={{ get: email, set: setEmail }}
          />
          <FloatingInput
            type="password"
            name="Password (6 or more characters)"
            states={{ get: password, set: setPassWord }}
          />

          <span>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy.
          </span>

          <button
            className="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Agree & Join
          </button>
          <div className="seperator">
            <hr />
            or
            <hr />
          </div>

          <button className="google" type="submit">
            <img src={Google} alt="Google" />
            Continue with google
          </button>
        </form>
        <div className="sign-up">
          Already on LinkedIn?
          <button type="button" onClick={() => navigate("/login")}>
            Signin
          </button>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
