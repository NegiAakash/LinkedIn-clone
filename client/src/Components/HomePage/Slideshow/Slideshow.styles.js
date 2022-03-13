import styled from "styled-components";

export const SlideshowWrapper = styled.section`
  background: #faf9f7;
  .wrapper {
    max-width: 1128px;
    margin: 0 auto;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    .top-container {
      /* background: red; */
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: flex-end;
      padding: 20px 10px;
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 5px 10px;
        /* background: red; */
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 5px;
        color: #5c5c5b;
        :hover {
          background: #b8b8af5c;
        }
      }
      .next {
        margin-left: 10px;
      }
    }
    .body-container {
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      .left-container {
        padding: 20px;
        border-radius: 5px;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        .heading {
          font-size: 2.5rem;
          font-weight: 400;
          color: #0a66c2;
          margin-bottom: 20px;
        }
        .sub-text {
          font-size: 2rem;
          color: #333333;
          margin-bottom: 20px;
          font-weight: 200;
        }
      }

      .right-container {
        /* background: red; */
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        width: 40%;
        padding-bottom: 50px;
        img {
          width: 90%;
          height: 90%;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .body-container {
        display: flex;
        flex-direction: column-reverse;

        .left-container {
          width: 50%;
          .heading {
            font-size: 1.3rem;
            font-weight: 400;
          }
          .sub-text {
            font-size: 1rem;
          }
        }
        .right-container {
          padding-bottom: 0;
        }
      }
    }
  }
`;
