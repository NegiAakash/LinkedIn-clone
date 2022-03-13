import React from "react";
import { FooterList, FooterList2 } from "../../../Utils/Lists";
import Logo from "../../SVGs/Logo.svg";
import { BottomWrapper, FooterWrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="wrapper">
          <div className="left-container">
            <div className="logo">
              <Logo color="#0A66C2" />
            </div>
          </div>
          <div className="right-container">
            {FooterList.map((item, index) => (
              <div className="list" key={index}>
                <h2>{item.name}</h2>
                <div className="link-list">
                  {item.val.map((link, index) => (
                    <div className="link" key={index}>
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
