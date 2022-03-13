import React from "react";
import { HeroWrapper } from "./Hero.styles";
import HeroSvg from "../../../Assets/Hero.svg";
import Arrow from "../../SVGs/Arrow.svg";

const HeroContainer = () => {
  return (
    <HeroWrapper>
      <div className="left-container">
        <div className="heading-text">
          Welcome to your professional community
        </div>
        <div className="action-btns">
          <button type="button">
            Search for a job{" "}
            <span>
              <Arrow />
            </span>
          </button>
          <button type="button">
            Find a person you know{" "}
            <span>
              <Arrow />
            </span>
          </button>
          <button type="button">
            Search for a job{" "}
            <span>
              <Arrow />
            </span>
          </button>
        </div>
      </div>
      <div className="right-container">
        <img src={HeroSvg} alt="" />
      </div>
    </HeroWrapper>
  );
};

export default HeroContainer;
