import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Banner() {
  return (
    <div className="banner" id="banner">
      <div className="banner_content">
        <h1>Wilson Zimthamaha Bonkuru</h1>
        <h3>Fullstack Developer & Pharmacist | CEO of ProgrammoCeuticals</h3>
        <p style={{color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem'}}>Building digital solutions that make a difference in healthcare and technology</p>
        <div className="banner_cta">
          <HashLink smooth to="#works" className="btn-primary">
            View My Work
          </HashLink>
          <HashLink smooth to="#contact" className="btn-secondary">
            Get In Touch
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Banner
