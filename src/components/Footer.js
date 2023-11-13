import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../data/logo.png";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div style={{ marginBottom: "2rem" }}>
        <a href="https://wa.me/2349033782254">
          <FontAwesomeIcon icon={faWhatsapp} fontSize={50} />
        </a>
        <a href="https://twitter.com/WBonkuru">
          <FontAwesomeIcon icon={faTwitter} fontSize={50} />
        </a>
        <a href="http://linkedin.com/in/wilson-zimthamaha-ab3aa0222">
          <FontAwesomeIcon icon={faLinkedinIn} fontSize={50} />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100062343344194">
          <FontAwesomeIcon icon={faFacebookSquare} fontSize={50} />
        </a>
      </div>

      <a href="/">
        <div className="foot">
          <div className="footer_logo">
            <img src={Logo} alt="" />
          </div>
          AlgorizimCodes 2023.
        </div>
      </a>
    </div>
  );
}

export default Footer;
