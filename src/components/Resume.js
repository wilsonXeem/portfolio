import React from "react";

import CV from "../data/CV.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="resume">
      <button className="resume_button">
        <a href={CV}>
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>
      </button>
    </div>
  );
}

export default Resume;
