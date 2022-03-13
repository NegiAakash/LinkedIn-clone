import React from "react";
import Logo from "../../SVGs/Logo.svg";
import {
  LeftContainer,
  NavbarContainer,
  RightContainer,
} from "./Navbar.styles";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <LeftContainer>
        <div className="logo">
          <Logo color="#0A66C2" />
        </div>
      </LeftContainer>
      <RightContainer>
        <div className="join" onClick={() => navigate("/register")}>
          <h4>Join now</h4>
        </div>
        <div className="sign-in">
          <button type="button" onClick={() => navigate("/login")}>
            Sign in
          </button>
        </div>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
