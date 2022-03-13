import styled from "styled-components";

export const InputWrapper = styled.div`
  #float-label {
    display: flex;
    flex-direction: column;
    min-width: 300px;
    position: relative;

    input {
      width: 100%;
      height: 56px;
      padding: 14px 16px 0 10px;
      outline: 0;
      border: 1px solid black;
      border-radius: 4px;
      background: #fff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
    }
    label {
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 12px;
      color: rgba(0, 0, 0, 0.7);
      pointer-events: none;
      position: absolute;
      transform: translate(0, 20px) scale(1);
      transform-origin: top left;
      transition: all 0.2s ease-out;
    }
    .Active {
      transform: translate(0, 12px) scale(0.75);
    }
    :focus-within {
      label {
        transform: translate(0, 12px) scale(0.75);
      }
    }
  }
`;
