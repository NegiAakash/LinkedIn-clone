import styled from "styled-components";

export const PostJobWrapper = styled.section`
  background: #f1ece5;
  /* padding: 0 50px; */
  .wrapper {
    max-width: 1128px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    gap: 50px;
    .text-heading {
      color: #b24020;
      width: minmax(40%, 408px);
      font-size: 40px;
      font-weight: 400;
      padding: 100px 0;
      /* background: red; */
    }
    .post-btn {
      /* background: red; */
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        background: transparent;
        border: 1px solid rgba(0, 0, 0, 0.5);
        font-size: 25px;
        padding: 10px 15px;
        border-radius: 50px;
        color: #5c5c5b;
        :hover {
          text-decoration: underline;
          background: #b8b8af;
          cursor: pointer;
        }
      }
    }
    @media screen and (max-width: 992px) {
      padding: 50px 20px;
    }
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 50px 20px;
      .text-heading {
        width: 60%;
        padding: 0;
        font-size: 35px;
        font-weight: 400;
      }
    }
  }
`;
