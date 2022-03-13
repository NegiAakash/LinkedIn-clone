import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Navbar from "../Components/HomePage/Navbar";
import Logo from "../Components/SVGs/Logo.svg";
import { FooterList2 } from "../Utils/Lists";
import Home from "./Home";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import Signup from "./Signup";

const UnAuthenticatedWrapper = styled.div`
  .logo-signin {
    margin: 30px 50px;
    width: 7rem;
    :hover {
      cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      margin: 30px 20px;
    }
  }
`;

const BottomWrapper = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  /* width: 80%; */
  .list {
    max-width: 1128px;
    padding: 20px 0;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* margin-left: 20px; */
    justify-content: flex-start;
    gap: 15px;
    flex-wrap: wrap;
    /* background: red; */
    .link {
      display: flex;
      width: fit-content;
      .logo {
        display: flex;
        align-items: center;
        width: 4rem;
      }
      code {
        margin-left: 10px;
        display: flex;
        font-weight: 100;
        :hover {
          color: #646463;
          text-decoration: none;
        }
      }
      font-size: 13px;
      color: #646463;
      font-weight: 600;
      :hover {
        color: #0a66c2;
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .disabled {
      :hover {
        cursor: not-allowed;
        color: #646463;
        text-decoration: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
    display: none;
    .list {
      /* background: red; */
      display: grid;
      width: 100%;
      grid-template-columns: 50vw 50vw;
    }
  }
`;

const UnAuthenticated = () => {
  const navigate = useNavigate();
  return (
    <>
      <UnAuthenticatedWrapper>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route
            path="/login"
            element={
              <>
                <div className="logo-signin" onClick={() => navigate("/")}>
                  <Logo color="#0A66C2" />
                </div>
                <SignIn />
              </>
            }
          />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </UnAuthenticatedWrapper>
      <BottomWrapper>
        <div className="list">
          <div className="link">
            <div className="logo">
              <Logo color="black" />
            </div>
            <code> © 2022</code>
          </div>
          {FooterList2.map((item, index) => (
            <div className="link" key={index}>
              {item}
            </div>
          ))}
          <div className="link disabled">English</div>
        </div>
      </BottomWrapper>
    </>
  );
};

export default UnAuthenticated;
