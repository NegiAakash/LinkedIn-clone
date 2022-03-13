import styled from "styled-components";

export const JobWrapper = styled.section`
  /* background: var(--brown-bg-100); */
  .wrapper {
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    .left-container {
      width: 40%;
      /* background: tomato; */
      padding: 50px 0;
      .text-heading {
        color: black;
        font-size: 50px;
        font-weight: 250;
        margin-top: 50px;
      }
    }
    .right-container {
      width: 60%;
      /* background: teal; */
    }
    @media screen and (max-width: 990px) {
      /* background: red; */
      flex-direction: column;
      margin: 0;
      padding: 50px 0 0 0;
      .left-container {
        width: 100%;
        padding: 0;
        .text-heading {
          width: 100%;
          margin-top: 20px;
          padding: 0 20px;
        }
      }
      .right-container {
        width: 100%;
        /* margin-top: 10px; */
        /* background: teal; */
        padding: 0 20px;
      }
    }
    @media screen and (max-width: 787px) {
      .left-container {
        .text-heading {
          font-size: 35px;
          font-weight: 400;
        }
      }
    }
  }
`;
