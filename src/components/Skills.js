import React from "react";

function Skills() {
  const skills = [
    "Javascript",
    "Typescript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Bootstrap",
    "Help Desk",
  ];
  return (
    <div className="skills" id="skills">
      <p className="skills_title">My Skills</p>
      {skills.map((skill, i) => {
        return (
          <div className="skill">
            <p>{skill}</p>
            <div className="skill_hr">
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
