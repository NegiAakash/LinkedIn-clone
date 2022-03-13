import styled from "styled-components";

export const ConnectWrapper = styled.section`
  /* background: #f1ece5; */
  padding: 50px 0;
  .wrapper {
    max-width: 1128px;
    margin: 0 auto;
    gap: 50px;
    display: flex;
    .left-container {
      width: 50%;
      padding: 100px 0;
      display: flex;
      flex-direction: column;
      gap: 50px;
      /* align-items: center; */
      .image {
        img {
          width: 50%;
        }
      }
      .body {
        .heading {
          font-size: 50px;
          font-weight: 200;
        }
        .action {
          button {
            font-size: large;
            background: transparent;
            border: solid 1px rgba(0, 0, 0, 0.5);
            width: fit-content;
            padding: 15px 20px;
            color: #5c5c5b;
            font-weight: 600;
            border-radius: 50px;
            :hover {
              text-decoration: underline;
              background: #b8b8af;
              cursor: pointer;
            }
          }
        }
      }
    }

    .right-container {
      width: 50%;
      padding: 100px 0;
      display: flex;
      flex-direction: column;
      gap: 50px;
      /* align-items: center; */
      .image {
        img {
          width: 50%;
        }
      }
      .body {
        .heading {
          font-size: 50px;
          font-weight: 200;
        }
        .action {
          select {
            font-size: large;
            background: #fff;
            border: solid 1px rgba(0, 0, 0, 0.5);
            width: fit-content;
            padding: 15px 20px;
            color: black;
            font-weight: 400;
            border-radius: 10px;
            :hover {
              /* text-decoration: underline; */
              background: #b8b8af;
              cursor: pointer;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1088px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .left-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 0px;
        .image {
          width: 40%;
          /* background: red; */
          img {
            max-width: 240px;
          }
        }
        .body {
          width: 50%;
          /* background: teal; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 30px;
        }
      }
      .right-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding-top: 30px;
        gap: 0px;
        .image {
          width: 40%;
          /* background: red; */
          img {
            max-width: 240px;
          }
        }
        .body {
          width: 50%;
          /* background: teal; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 30px;
        }
      }
    }
    @media screen and (max-width: 860px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      .left-container {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        .image {
          width: 70%;
        }
        .body {
          width: 100%;
          .heading {
            font-size: 30px;
            font-weight: 400;
          }
        }
      }
      .right-container {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        width: 100%;
        .image {
          width: 100%;
        }
        .body {
          width: 100%;
          .heading {
            font-size: 30px;
            font-weight: 400;
          }
          /* flex-grow: 1; */

          .action {
            select {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
