import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

import B1 from "../data/b1.png";
import C1 from "../data/c1.png";
import CloNG from "../data/clong.png";
import D1 from "../data/d1.png";
import F1 from "../data/f1.png";
import G1 from "../data/g1.png";
import P1 from "../data/p1.png";
import Result from "../data/result.png";
import V1 from "../data/v1.png";

export default function Works() {
  const projects = [
    {
      title: "CloNG Website",
      description: "NGO website built with modern technologies to support community outreach and organizational goals.",
      image: CloNG,
      tech: ["Angular", "Node.js", "Express", "TypeScript", "Drizzle", "PostgreSQL"],
      website: "https://clongproject.org",
      category: "NGO"
    },
    {
      title: "Pharmapool Synergy Solutions",
      description: "Professional pharmaceutical company website with modern design and comprehensive service showcase.",
      image: P1,
      tech: ["React", "Node.js", "MongoDB"],
      website: "https://www.pharmapoolng.com",
      category: "Healthcare"
    },
    {
      title: "Beach Resort Booking",
      description: "Full-stack resort booking application with room management and reservation system.",
      image: B1,
      tech: ["React", "Context API", "CSS3"],
      website: "https://beach-resort-one.vercel.app/",
      github: "https://github.com/wilsonXeem/Beach-Resort",
      category: "Web App"
    },
    {
      title: "Etiquette Pharmaceuticals",
      description: "Corporate website for pharmaceutical manufacturing company with product catalog and services.",
      image: G1,
      tech: ["React", "JavaScript", "CSS3"],
      website: "https://etiquettepharmaceuticals.com/",
      category: "Healthcare"
    },
    {
      title: "Computer Based Test System",
      description: "Educational testing platform for pharmacy students with real-time scoring and analytics.",
      image: C1,
      tech: ["React", "Node.js", "Express"],
      website: "https://student-test-app.vercel.app/",
      github: "https://github.com/wilsonXeem/Pharm-Test-App.git",
      category: "Education"
    },
    {
      title: "AfriVacx Health Foundation",
      description: "Non-profit health organization platform promoting healthcare awareness and vaccination programs.",
      image: V1,
      tech: ["React", "Express", "CSS3"],
      website: "https://afrivacx.org",
      category: "Healthcare"
    },
    {
      title: "Faculty Result Management System",
      description: "Result management site for academic institutions with comprehensive student performance tracking and reporting.",
      image: Result,
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/wilsonXeem/school_results_management_system_ui",
      category: "School management site"
    },
    {
      title: "Investment Platform",
      description: "Financial investment platform with user dashboard, portfolio tracking, and secure transactions.",
      image: F1,
      tech: ["React", "Node.js", "MongoDB"],
      website: "https://britishfx.vercel.app/",
      github: "https://github.com/wilsonXeem/Britishfx",
      category: "Fintech"
    },
    {
      title: "Shop Automation System",
      description: "Business management system for inventory tracking, sales reporting, and transaction management.",
      image: D1,
      tech: ["React", "Node.js", "MongoDB"],
      website: "https://shop-automation.vercel.app/",
      github: "https://github.com/wilsonXeem/shop-automation-ui",
      category: "Business"
    },
  ];

  return (
    <div className="works section" id="works">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        A showcase of my recent work in web development and healthcare technology
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}