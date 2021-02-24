import React, { useState, useEffect } from "react";

function About() {
  const [age, setAge] = useState(20);

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
    <div className="content-box">
      <h2>Datos personales</h2>
      <p>Edad: {age}</p>
      <p>Email: {info.email}</p>
      <p>{info.city}</p>
      <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-light border">
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="LinkedInLogo"
            height="30"
          />
        </button>
      </a>
      <button className="btn btn-light border ms-2">
        <a href={info.github} target="_blank" rel="noopener noreferrer">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
            alt="GitHubLogo"
            height="30"
          />
        </a>
      </button>
    </div>
  );
}

export default About;
