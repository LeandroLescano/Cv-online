import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function About() {
  const [age, setAge] = useState(0);

  const info = {
    email: "leandrolescano11@gmail.com",
    dateBirth: "2000-03-19",
    phone: "011 34527738",
    city: "San Fernando, Buenos Aires, Argentina",
    linkedin: "https://www.linkedin.com/in/leandrolescano/",
    github: "https://github.com/LeandroLescano",
  };

  useEffect(() => {
    var birth = new Date(info.dateBirth);
    var ageDifMs = Date.now() - birth;
    var ageDate = new Date(ageDifMs);
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  }, []);

  return (
    <div className="content-box mb-2">
      <h2 data-aos="fade-right">Datos personales</h2>
      <div className="row m-0">
        <div className="col" data-aos="fade-right">
          <div className="card mb-2">
            <div className="fs-4">Edad: {age} años (19/03/2000)</div>
          </div>
          <div className="card mb-2">
            <div className="fs-4">Ciudad: {info.city}</div>
          </div>
        </div>
        <div className="col" data-aos="fade-left">
          <div className="row mb-2 ms-0">
            <a href={`mailto:${info.email}`} className="px-0">
              <div className="card d-flex flex-row justify-content-center">
                <FontAwesomeIcon
                  size="xs"
                  className="icon-email"
                  icon={faEnvelope}
                />
                <span className="fs-4 ms-2">Contactame via mail</span>
              </div>
            </a>
          </div>
          <div className="row m-0">
            <div className="d-flex p-0 text-center">
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-fill me-1"
              >
                <button className="btn btn-light border w-100">
                  <img
                    src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                    alt="LinkedInLogo"
                    height="25"
                  />
                </button>
              </a>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-fill ms-1"
              >
                <button className="btn btn-light border w-100">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
                    alt="GitHubLogo"
                    height="25"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
