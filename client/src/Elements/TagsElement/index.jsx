import React from "react";
import { TagsWrapper } from "./Tags.styles";

export const Tags = ({ title, tags }) => {
  return (
    <TagsWrapper>
      <h3 className="title">{title}</h3>
      <div className="tags-list">
        {tags.map((tag, key) => (
          <div className="tag" key={key}>
            {tag}
          </div>
        ))}
      </div>
    </TagsWrapper>
  );
};
