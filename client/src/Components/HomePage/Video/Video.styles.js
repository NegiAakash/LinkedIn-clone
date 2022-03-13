import styled from "styled-components";

export const VideoWrapper = styled.section`
  background: linear-gradient(
    to right,
    white 0%,
    white 40%,
    #f4faff 40%,
    #f4faff 100%
  );

  .wrapper {
    max-width: 1128px;
    margin: 0 auto;
    .container {
      padding: 200px 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 50px;
      iframe {
      }
      .heading {
        h1 {
          color: #b24020;
          font-size: 40px;
          font-weight: 400;
        }
      }
    }

    @media screen and (max-width: 990px) {
      padding: 0 20px;
    }
  }
  @media screen and (max-width: 787px) {
    background: linear-gradient(
      to bottom,
      white 0%,
      white 40%,
      #f4faff 40%,
      #f4faff 100%
    );
  }
  @media screen and (max-width: 767px) {
    .wrapper {
      .container {
        padding-bottom: 30px;
        flex-direction: column;
        iframe {
          aspect-ratio: 16 / 9;
          width: 90vw;
        }
        .heading {
          h1 {
            font-size: 30px;
          }
        }
      }
    }
  }
`;
