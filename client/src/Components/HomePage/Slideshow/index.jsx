import React from "react";
import Slide1 from "../../../Assets/slide1.png";
import { SlideshowWrapper } from "./Slideshow.styles";

const Slideshow = () => {
  return (
    //Work on slider later
    <SlideshowWrapper>
      <div className="wrapper">
        <div className="top-container">
          <button className="prev">&lt; Previous</button>
          <button className="next">Next &gt;</button>
        </div>
        <div className="body-container">
          <div className="left-container">
            <div className="heading">
              Conversations today could lead to opportunity tomorrow
            </div>
            <div className="sub-text">
              Sending messages to people you know is a great way to strengthen
              relationships as you take the next step in your career.
            </div>
          </div>
          <div className="right-container">
            <img src={Slide1} alt="slide1" />
          </div>
        </div>
      </div>
    </SlideshowWrapper>
  );
};

export default Slideshow;
