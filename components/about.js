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
    <div className="content-box mb-2">
      <h2 data-aos="fade-right">Datos personales</h2>
      <div className="row m-0">
        <div className="col" data-aos="fade-right">
          <p className="fs-4">
            Edad: <br />
            {age}
          </p>
          <p className="fs-4">
            Email: <br />
            {info.email}
          </p>
          <p className="fs-5">{info.city}</p>
        </div>
        <div className="col" data-aos="fade-left">
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-light border">
              <img
                src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
                alt="LinkedInLogo"
                height="25"
              />
            </button>
          </a>
          <a href={info.github} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-light border ms-2">
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
  );
}

export default About;
