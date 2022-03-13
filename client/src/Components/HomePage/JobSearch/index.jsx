import React from "react";
import { Tags } from "../../../Elements/TagsElement";
import { JobCategory } from "../../../Utils/Lists";
import { JobWrapper } from "./Job.styles";

const JobSearch = () => {
  return (
    <JobWrapper>
      <div className="wrapper">
        <div className="left-container">
          <div className="text-heading">
            Find the right job or internship for you
          </div>
        </div>
        <div className="right-container">
          <Tags title="Suggested Searches " tags={JobCategory} />
        </div>
      </div>
    </JobWrapper>
  );
};

export default JobSearch;
