import React from 'react'

import ZIM from "../data/zim2.jpg"

function Banner() {
  return (
    <div className="banner" id="banner">
      <div className="banner_head">
        <h1>I'm Wilson Zimthamaha Bonkuru</h1>
        <h3>Web Developer and Tech Support Specialist</h3>
      </div>
      <div>
        <img src={ZIM} alt="ZIM" className="banner_img" />
      </div>
    </div>
  );
}

export default Banner
