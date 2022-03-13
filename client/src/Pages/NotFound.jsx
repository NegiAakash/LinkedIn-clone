import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  /* background: linear-gradient(to bottom right, #ffd9b3, #35353599); */
  height: 70vh;

  .wrapper {
    .error-code {
      font-size: 180px;
      color: #4b4b4b9e;
      font-weight: 300;
      text-align: center;
      margin-top: 10%;
      /* margin-bottom: 10%; */
    }
    .error-title {
      font-size: 60px;
      color: #4b4b4b9e;

      font-weight: 200;
      text-align: center;
      /* margin-top: 10%; */
      margin-bottom: 5%;
    }
    .error-description {
      color: #4b4b4b;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      /* margin-top: 10%; */
      margin-bottom: 5%;
    }
    .error-actions {
      text-align: center;
      button {
        font-size: 20px;
        padding: 10px;
        color: var(--color-logo);
        border: solid 1px var(--color-logo);
        background: transparent;
        /* border: none; */
        border-radius: 5px;

        :hover {
          background: #0c72d850;
        }
      }
    }
    @media screen and (max-width: 768px) {
      margin: 0 50px;
      .error-code {
        font-size: 120px;
      }
      .error-title {
        font-size: 40px;
      }
      .error-description {
        font-size: 16px;
      }
    }
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <div className="wrapper">
        <div className="error-code">404</div>
        <div className="error-title">Page not found</div>
        <div className="error-description">Uh oh, Seems like you are lost.</div>
        <div className="error-actions">
          <button onClick={() => navigate("/")}>Back to home</button>{" "}
        </div>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
