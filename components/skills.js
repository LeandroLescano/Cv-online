import React, { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "C#",
      logo: "https://img.icons8.com/ios-filled/100/000000/c-sharp-logo.png",
      backColor: "#7b1fa2",
    },
    {
      name: "Java",
      logo:
        "https://img.icons8.com/ios-filled/100/000000/java-coffee-cup-logo--v1.png",
      backColor: "#c62828",
    },
    {
      name: "SQL",
      logo:
        "https://img.icons8.com/ios-filled/100/000000/data-configuration.png",
      backColor: "#0d47a1",
    },
    {
      name: "HTML",
      logo: "https://img.icons8.com/ios-filled/100/000000/html-5.png",
      backColor: "#ef6c00",
    },
    {
      name: "CSS",
      logo: "https://img.icons8.com/ios-filled/100/000000/css3.png",
      backColor: "#0277bd",
    },
    {
      name: "Javascript",
      logo: "https://img.icons8.com/ios-filled/100/000000/javascript.png",
      backColor: "#ffff00",
    },
    {
      name: "ReactJS",
      logo:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      backColor: "#03a9f4",
    },
    {
      name: "Firebase",
      logo:
        "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png",
      backColor: "#fb8c00",
    },
    {
      name: "Android",
      logo: "https://img.icons8.com/ios-filled/100/000000/android-os.png",
      backColor: "#7cb342",
    },
  ]);

  const handleHover = (name) => {
    let obj = document.getElementById(name + "-logo");
    if (obj.style.opacity == "100") {
      obj.style.opacity = "0";
    } else {
      obj.style.opacity = "100";
    }
  };

  return (
    <div className="content-box">
      <h2>Tecnologías</h2>
      <div className="skills-section">
        <div className="row">
          {skills.map((tec, i) => {
            return (
              <div className="col-6 col-lg-4 mb-3">
                <div
                  key={i}
                  className="card"
                  onMouseEnter={() => handleHover(tec.name)}
                  onMouseLeave={() => handleHover(tec.name)}
                >
                  <div className="skill-card">
                    <p className="fs-2">{tec.name}</p>
                    <div className="skill-logo" id={`${tec.name}-logo`}>
                      <img src={tec.logo} alt="skillLogo" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
