import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: grid;
  /* align-items: center; */
  grid-template-columns: 40% 60%;
  justify-content: center;
  max-width: 1128px;
  margin: auto;
  height: 65vh;
  gap: 10px;
  .left-container {
    /* background: tomato; */
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;

    .heading-text {
      color: var(--text-brown);
      font-size: 55px;
      font-weight: 250;
      margin-top: 50px;
    }
    .action-btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* background: red; */
      width: 100%;
      margin: 50px 0px;

      button {
        line-height: 1.25;
        min-width: 25rem;
        margin: 10px 20px 10px 0;
        padding: 20px 15px;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        text-align: start;
        background: transparent;
        border: solid 1pt #a3766950;
        display: flex;
        justify-content: space-between;
        span {
          margin-right: 10px;
        }
        :hover {
          text-decoration: underline;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
      }
    }
  }
  .right-container {
    /* background: teal; */
    display: flex;
    justify-content: end;
    align-items: flex-end;
    img {
      position: relative;
      height: 60vh;
      right: -25rem;
      z-index: -1;
      /* overflow: visible; */
    }
  }
  @media screen and (max-width: 1780px) {
    display: grid;
    grid-template-columns: 45% 55%;
    /* overflow-x: hidden; */
  }
  @media screen and (max-width: 1005px) {
    display: grid;
    grid-template-columns: 45% 55%;
    overflow-x: hidden;

    .left-container {
      .heading-text {
        /* background: teal; */
        margin: 50px 0px 0px 0px;
        /* padding: 0 0 0 20px; */
      }
      .action-btns {
        margin-top: 0;
        /* background: red; */
        padding-left: 20px;
        button {
          margin-top: 0;
        }
      }
    }
    .right-container {
    }
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 80%;
    padding: 0 20px;
    .left-container {
      display: flex;
      justify-content: start;
      align-self: start;
      width: 100%;
      .heading-text {
        width: 100%;
        text-align: start;
        margin-top: 20px;
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 10px;
      }
      .action-btns {
        width: 100vw;
        button {
          min-width: 5rem;
        }
      }
    }
    .right-container {
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 15rem;
      position: relative;
      /* background: red; */
      img {
        /* margin: 0; */
        position: absolute;
        width: 15rem;
        left: 0;
        right: 0;
        bottom: -150px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
