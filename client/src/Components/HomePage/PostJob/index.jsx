import React from "react";
import { PostJobWrapper } from "./PostJob.styles";

const PostJob = () => {
  return (
    <PostJobWrapper>
      <div className="wrapper">
        <div className="text-heading">
          Post your job for millions of people to see
        </div>
        <div className="post-btn">
          <button type="button">Post a job</button>
        </div>
      </div>
    </PostJobWrapper>
  );
};

export default PostJob;
