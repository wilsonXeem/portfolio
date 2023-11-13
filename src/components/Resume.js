import React from "react";

import CV from "../data/CV.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="resume">
      <a href={CV}>
        <button className="resume_button">
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </button>
      </a>
    </div>
  );
}

export default Resume;
