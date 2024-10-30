import React from "react";

function Skills() {
  const skills = [
    "Javascript",
    "Typescript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "LaTex",
    "Industrial Pharmacy",
    "Clinical Pharmacy",
  ];
  return (
    <div className="skills" id="skills">
      <h1 className="work_title">My skills</h1>
      <div className="work_hr">
        <hr />
      </div>
      <div className="skill">
        {skills.map((skill, i) => {
          return <p>{skill}</p>;
        })}
      </div>
    </div>
  );
}

export default Skills;
