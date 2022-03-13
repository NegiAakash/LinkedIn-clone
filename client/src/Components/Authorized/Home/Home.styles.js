import styled from "styled-components";

export const HomeWrapper = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px;
  .top-panel {
    /* background: rgba(0, 0, 0, 0.1); */
    width: 100%;
    height: 5rem;
    margin-bottom: 50px;
    flex-wrap: wrap;

    .input {
      padding: 50px 0;
      .container {
        width: 50%;
        margin: 0 auto;
        display: flex;
        gap: 10px;
        background: white;
        color: black;
        border: solid black 1px;
        textarea {
          width: 80%;
          background: transparent;
          border: none;
          text-decoration: none;
          outline: none;
          resize: none;
          font-size: larger;
          padding: 15px 0 0px 10px;
        }
        button {
          width: 20%;
          background: teal;
          color: white;
          border: none;
          border-left: black solid 1px;
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .body {
    .post {
      background: white;
      border: 1px solid #e6e6e6;
      width: 50%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px auto;
      h3 {
        margin-bottom: 20px;
      }
    }
  }
`;
