import React from "react";
import { Tags } from "../../../Elements/TagsElement";
import { ExploreWrapper } from "./Explore.styles";
import { Topics } from "../../../Utils/Lists";

const Explore = () => {
  return (
    <ExploreWrapper>
      <div className="wrapper">
        <div className="left-container">
          <h1 className="text-heading">Explore topics you are interested in</h1>
        </div>
        <div className="right-container">
          <Tags title="Content Topics" tags={Topics} />
        </div>
      </div>
    </ExploreWrapper>
  );
};

export default Explore;
