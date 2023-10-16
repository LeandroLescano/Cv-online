import React, {useState} from "react";

function Skills() {
  const [skills] = useState([
    {
      name: "Typescript",
      logo: "/logo-typescript.png",
      backColor: "#0277bd",
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
      name: "React Native",
      logo: "logo-react.png",
      backColor: "#03a9f4",
    },
    {
      name: "Firebase",
      logo: "/logo-firebase.png",
      backColor: "#fb8c00",
    },
    {
      name: "NextJS",
      logo: "logo-nextjs.png",
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
      <div>
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
