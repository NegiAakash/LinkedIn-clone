import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #faf9f7;

  .wrapper {
    max-width: 1128px;
    padding: 20px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left-container {
      .logo {
        width: 5rem;
        :hover {
          cursor: pointer;
        }
      }
    }

    .right-container {
      width: 100%;
      display: flex;
      /* background: red; */
      justify-content: space-around;
      .list {
        h2 {
          font-size: 1rem;
          letter-spacing: 1px;
        }
        .link-list {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          .link {
            font-size: 14px;
            color: #646463;
            font-weight: 600;
            :hover {
              color: #0a66c2;
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
    @media screen and (max-width: 992px) {
      padding: 20px 20px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;

      gap: 20px;
      .right-container {
        flex-direction: column;
        gap: 20px;
        .list {
          .link-list {
            width: fit-content;
          }
        }
      }
    }
  }
`;
