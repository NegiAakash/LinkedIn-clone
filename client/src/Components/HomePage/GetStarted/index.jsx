import React from "react";
import { ComponentWrapper } from "./Started.styles";

const GetStarted = () => {
  return (
    <ComponentWrapper>
      <div className="wrapper">
        <div className="heading">
          Join your colleagues, classmates, and friends on LinkedIn.{" "}
        </div>
        <div className="button">
          <button type="button">Get Started</button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default GetStarted;
