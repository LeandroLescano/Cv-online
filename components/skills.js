import React, { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "C#",
      logo: "https://iconape.com/wp-content/files/sh/51404/svg/c--4.svg",
      backColor: "#7b1fa2",
    },
    {
      name: "Java",
      logo: "http://assets.stickpng.com/thumbs/58480979cef1014c0b5e4901.png",
      backColor: "#c62828",
    },
    {
      name: "SQL",
      logo:
        "https://www.pngkit.com/png/full/269-2693118_kloudio-mysql-my-sql-logo-png.png",
      backColor: "#0d47a1",
    },
    {
      name: "HTML",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png",
      backColor: "#ef6c00",
    },
    {
      name: "CSS",
      logo:
        "https://www.mybusiness360.gr/static/1972f2fa887caf3b35255d5419471333/bc59e/css3-tool.png",
      backColor: "#0277bd",
    },
    {
      name: "Javascript",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
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
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png",
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
              <div key={i} className="col-6 col-lg-4 mb-3">
                <div
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
