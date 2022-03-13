import styled from "styled-components";

export const RegisterWrapper = styled.div`
  min-height: 90vh;
  background: #f3f2ef;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;
  .logo {
    margin-top: 30px;
    width: 10rem;
  }
  .top-heading {
    font-size: 2rem;
  }
  .wrapper {
    background: white;
    width: fit-content;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    gap: 20px;
    .text {
      h2 {
        font-size: 2rem;
      }
      p {
        padding: 10px 0;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      span {
        cursor: pointer;
        color: var(--color-logo);
        font-size: 12px;
        font-weight: 300;
        width: 20rem;
        text-align: center;
      }
      .submit {
        background: var(--color-logo);
        color: white;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 10px 20px;
        border: none;
        border-radius: 28px;
        :hover {
          background: #075ba1;
          cursor: pointer;
        }
      }
      .google {
        /* box-sizing: border-box; */
        background: white;
        color: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(0, 0, 0, 0.6);
        font-size: 1.2rem;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 28px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: all 0.1s ease-out;
        img {
          width: 2rem;
        }
        :hover {
          outline: 1.5px solid black;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .seperator {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        color: rgba(0, 0, 0, 0.5);
        hr {
          width: 100%;
          height: 1px;
          border: solid 1px rgba(0, 0, 0, 0.3);
        }
      }
    }
    @media screen and (max-width: 768px) {
      box-shadow: none;
      border-radius: 0px;
      background: white;
    }
  }

  .sign-up {
    margin-top: 5px;
    text-align: center;

    button {
      color: var(--color-logo);
      background: transparent;
      border: none;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 5px;
      :hover {
        cursor: pointer;
        background-color: #0770c57e;
        border-radius: 28px;
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 768px) {
    /* align-items: start; */
    min-height: 100vh;
    background: white;

    .top-heading {
      text-align: center;
      padding: 0 10px;
    }
  }
`;
