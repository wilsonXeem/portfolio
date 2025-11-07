import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faUserTie,
  faEye,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="img">
          <h1>WZ</h1>
        </div>
        
        <HashLink smooth to="#banner" onClick={closeSidebar}>
          <div className="side">
            <FontAwesomeIcon icon={faHouseChimney} fontSize="1.2rem" />
            <h5>HOME</h5>
          </div>
        </HashLink>
        
        <HashLink smooth to="#description" onClick={closeSidebar}>
          <div className="side">
            <FontAwesomeIcon icon={faUserTie} fontSize="1.2rem" />
            <h5>ABOUT</h5>
          </div>
        </HashLink>
        
        <HashLink smooth to="#skills" onClick={closeSidebar}>
          <div className="side">
            <FontAwesomeIcon icon={faEye} fontSize="1.2rem" />
            <h5>SKILLS</h5>
          </div>
        </HashLink>
        
        <HashLink smooth to="#works" onClick={closeSidebar}>
          <div className="side">
            <FontAwesomeIcon icon={faEye} fontSize="1.2rem" />
            <h5>WORKS</h5>
          </div>
        </HashLink>
        
        <HashLink smooth to="#contact" onClick={closeSidebar}>
          <div className="side">
            <FontAwesomeIcon icon={faEnvelope} fontSize="1.2rem" />
            <h5>CONTACT</h5>
          </div>
        </HashLink>
      </div>
    </>
  );
}

export default Sidebar;
