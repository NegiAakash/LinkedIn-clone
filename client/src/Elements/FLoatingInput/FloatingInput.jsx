import React, { useState } from "react";
import { InputWrapper } from "./Input.styles";

export const FloatingInput = ({ type, name, states: { get, set } }) => {
  const [isActive, setIsActive] = useState(false);

  function handleTextChange(text) {
    set(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <InputWrapper>
      <div id="float-label">
        <input
          type={type}
          value={get}
          onChange={(e) => handleTextChange(e.target.value)}
        />
        <label className={isActive ? "Active" : ""} htmlFor={name}>
          {name}
        </label>
      </div>
    </InputWrapper>
  );
};
