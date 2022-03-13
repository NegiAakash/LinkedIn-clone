import styled from "styled-components";

export const NavbarContainer = styled.div`
  /* background: red; */
  max-width: 1128px;
  margin: auto;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  padding: 5px 15px;

  /* background: blue; */
  display: flex;
  align-items: center;
  .logo {
    width: 8rem;
    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1160px) {
    .logo {
      width: 5rem;
      :hover {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 295px) {
    padding: 10px 5px;
  }
`;

export const RightContainer = styled.div`
  /* background: red; */
  display: flex;
  min-width: auto;
  padding: 5px 15px;

  font-size: large;
  justify-content: end;
  align-items: center;

  .join {
    color: var(--text-brown);
    padding: 10% 20px;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background: var(--color-light-brown);
    }
  }
  .sign-in {
    margin-left: 10px;
    button {
      border: solid 1px var(--color-logo);
      padding: 10px 20px;
      background: transparent;
      border-radius: 20px;
      color: var(--color-logo);
      font-weight: 800;
      font-size: 1rem;
      :hover {
        cursor: pointer;
        border: solid 2px var(--color-logo);
        background: var(--color-logo-light);
        padding: 9px 19px;
      }
    }
  }

  @media screen and (max-width: 295px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 5px;
    .join {
      color: var(--text-brown);
      padding: 5px 10px;
      border-radius: 5px;
      font-size: large;
      :hover {
        cursor: pointer;
        background: var(--color-light-brown);
      }
    }
    .sign-in {
      /* margin-left: 10px; */
      margin-top: 5px;
      button {
        border: solid 1px var(--color-logo);
        padding: 10px 20px;
        background: transparent;
        border-radius: 20px;
        color: var(--color-logo);
        font-weight: 800;
        font-size: 0.9rem;
        :hover {
          cursor: pointer;
          border: solid 2px var(--color-logo);
          background: var(--color-logo-light);
          padding: 9px 19px;
        }
      }
    }
  }
`;
