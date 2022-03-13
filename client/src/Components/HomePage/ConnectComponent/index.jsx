import React from "react";
import { ConnectWrapper } from "./Connect.style";
import couch from "../../../Assets/couch.svg";
import desk from "../../../Assets/desk.svg";
import { Topics } from "../../../Utils/Lists";

const Connect = () => {
  return (
    <ConnectWrapper>
      <div className="wrapper">
        <div className="left-container">
          <div className="image">
            <img src={couch} alt="People on couch" />
          </div>
          <div className="body">
            <h1 className="heading">Connect with people who can help</h1>
            <div className="action">
              <button type="button">Find people you know</button>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="image">
            <img src={desk} alt="People on couch" />
          </div>
          <div className="body">
            <h1 className="heading">Learn the skills you need to succeed</h1>
            <div className="action">
              <select>
                <option value="" disabled>
                  Choose a topic to learn about
                </option>
                {Topics.map((topic, index) => (
                  <option key={index} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </ConnectWrapper>
  );
};

export default Connect;
