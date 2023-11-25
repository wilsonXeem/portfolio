import React from "react";

import ZIM from "../data/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUserTie,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { HashLink } from "react-router-hash-link";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="img">
        <img src={ZIM} alt="ZIM" className="imgg" />
      </div>
      <HashLink smooth to="#banner">
        <div className="side">
          <FontAwesomeIcon icon={faHouseChimney} fontSize="2rem" />
          <h5>HOME</h5>
        </div>
      </HashLink>
      <HashLink smooth to="#description">
        <div className="side">
          <FontAwesomeIcon icon={faUserTie} fontSize="2rem" />
          <h5>ABOUT</h5>
        </div>
      </HashLink>
      <HashLink smooth to="#works">
        <div className="side">
          <FontAwesomeIcon icon={faEye} fontSize="2rem" />
          <h5>WORKS</h5>
        </div>
      </HashLink>
      <HashLink smooth to="#contact">
        <div className="side">
          <FontAwesomeIcon icon={faEnvelope} fontSize="2rem" />
          <h5>CONTACT</h5>
        </div>
      </HashLink>
    </div>
  );
}

export default Sidebar;
