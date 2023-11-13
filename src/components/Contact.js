import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Emailjs from "./Emailjs";

function Contact() {
  return (
    <div className="contact" id="contact">
      <p className="contact_title">Contact</p>
      <div className="contact_hr">
        <hr />
      </div>
      <div className="contact_body">
        <div>
          <div className="cont">
            <FontAwesomeIcon icon={faLocationDot} fontSize={40} />
            <p>Enugu, Nigeria</p>
          </div>
          <div className="cont">
            <FontAwesomeIcon icon={faPhone} fontSize={40} />
            <p>Phone: +2349033782254</p>
          </div>
          <div className="cont">
            <FontAwesomeIcon icon={faEnvelope} fontSize={40} />
            <p>Email: wilsonzim566@gmail.com</p>
          </div>
        </div>
        <div>
          <h5>Email me directly</h5>
          <Emailjs />
        </div>
      </div>
    </div>
  );
}

export default Contact;
