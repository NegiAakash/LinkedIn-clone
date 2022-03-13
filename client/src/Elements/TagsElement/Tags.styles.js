import styled from "styled-components";

export const TagsWrapper = styled.div`
  padding: 50px 0 100px 0;
  .title {
    margin-top: 20px;
    text-transform: uppercase;
    color: var(--text-brown);
  }
  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 20px;
    .tag {
      font-size: x-large;
      background: #e6e6e4;
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
  @media screen and (max-width: 990px) {
    padding: 0px 0 100px 0;
    /* font-size: large; */
    .tags-list {
      .tag {
        font-size: large;
      }
    }
  }
`;
