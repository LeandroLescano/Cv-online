import React, { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "C#",
      logo: "/logo-csharp.svg",
      backColor: "#7b1fa2",
    },
    {
      name: "Java",
      logo: "/logo-java.png",
      backColor: "#c62828",
    },
    {
      name: "SQL",
      logo: "logo-sql.png",
      backColor: "#0d47a1",
    },
    {
      name: "HTML",
      logo: "/logo-html.png",
      backColor: "#ef6c00",
    },
    {
      name: "CSS",
      logo: "/logo-css.png",
      backColor: "#0277bd",
    },
    {
      name: "Javascript",
      logo: "/logo-js.png",
      backColor: "#ffff00",
    },
    {
      name: "ReactJS",
      logo: "logo-react.png",
      backColor: "#03a9f4",
    },
    {
      name: "Firebase",
      logo: "/logo-firebase.png",
      backColor: "#fb8c00",
    },
    {
      name: "Android",
      logo: "logo-android.png",
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
      <h2 data-aos="fade-right" data-aos-offset="10" className="mb-2">
        Tecnologías
      </h2>
      <div className="skills-section">
        <div className="row m-0">
          {skills.map((tec, i) => {
            return (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-offset="10"
                className="col-6 col-lg-4 mb-3"
              >
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
