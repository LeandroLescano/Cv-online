import React from "react";

function Education() {
  const education = [
    {
      title: "Bachiller en Ciencias Económicas",
      institute: "Colegio Alfonsina Storni",
      since: "2012",
      until: "2017",
    },
    {
      title: "Técnicatura Universitaria en Programación",
      institute: "Universidad Tecnológica Nacional",
      since: "2018",
      until: "2019",
    },
    {
      title: "Técnicatura Universitaria en Sistemas Informáticos",
      institute: "Universidad Tecnológica Nacional",
      since: "2020",
      until: "2020",
    },
  ];

  return (
    <div className="content-box">
      <h2>Estudios</h2>
      <div className="row">
        <div className="col">
          <ul className="timeline">
            {education.reverse().map((item, i) => {
              return (
                <li key={i}>
                  <p className="fs-3 mb-1">{item.title} </p>
                  <p className="fs-4 m-0">{item.institute}</p>
                  <p className="fs-5 m-0">{item.since + "-" + item.until}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
