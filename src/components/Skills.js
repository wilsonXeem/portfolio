import React, { useEffect, useState } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = {
    "Frontend Development": [
      { name: "AngularJS", level: 85 },
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
    "Backend Development": [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Drizzle", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
    "Data Analysis": [
      { name: "Excel", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
    ],
    "Healthcare & Research": [
      { name: "Clinical Pharmacy", level: 95 },
      { name: "Industrial Pharmacy", level: 90 },
      { name: "LaTeX", level: 70 },
      { name: "Research", level: 85 },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills section" id="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">
        Combining technical development skills with healthcare expertise
      </p>
      
      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-card">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
              {category}
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">
                  <span>{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
