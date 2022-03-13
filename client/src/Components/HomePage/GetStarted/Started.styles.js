import styled from "styled-components";
import bg from "../../../Assets/bg.png";

export const ComponentWrapper = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  height: 100vh;
  .wrapper {
    max-width: 1128px;
    margin: 0 auto;
    height: 60vh;
    /* background: red; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .heading {
      font-size: 3.5rem;
      font-weight: 200;
    }
    .button {
      width: 100%;
      padding: 50px 0;
      button {
        color: #fff;
        background: var(--color-logo);
        border: none;
        padding: 20px 20px;
        border-radius: 35px;
        font-size: 1.5rem;
        font-weight: 400;
        cursor: pointer;
      }
    }

    @media screen and (max-width: 992px) {
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 992px) {
    /* height: 100vh; */
  }
  @media screen and (max-width: 768px) {
    background: white;
    height: min-content;
    .wrapper {
      height: min-content;
      padding: 40px 20px;
      .heading {
        font-size: 2rem;
        font-weight: 300;
      }

      .button {
        padding: 20px 0;
        button {
          color: #fff;
          background: var(--color-logo);
          border: none;
          padding: 15px 15px;
          border-radius: 30px;
          font-size: 1.3rem;
          font-weight: 400;
          cursor: pointer;
        }
      }
    }
  }
`;
