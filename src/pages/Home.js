import React from "react";

import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import Description from "../components/Description";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <ThemeToggle />
      <div className="bod">
        <Banner />
        <Description />
        <Skills />
        <Resume />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
