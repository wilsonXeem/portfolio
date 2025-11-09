import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <div className="footer" id="footer">
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
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
        <div className="foot">ProgrammoCeuticals 2025.</div>
      </a>
    </div>
  );
}

export default Footer;
