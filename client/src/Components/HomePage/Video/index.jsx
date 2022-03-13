import React from "react";
import { VideoWrapper } from "./Video.styles";

const Video = () => {
  return (
    <VideoWrapper>
      <div className="wrapper">
        <div className="container">
          <iframe
            width="500"
            height="378"
            src="https://www.youtube.com/embed/IlYUUN8rL_Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="heading">
            <h1> In it to chase my dream </h1>
          </div>
        </div>
      </div>
    </VideoWrapper>
  );
};

export default Video;
