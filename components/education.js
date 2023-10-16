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
    {
      title: "Licenciatura en Tecnología Educativa (Incompleto)",
      institute: "Universidad Tecnológica Nacional",
      since: "2021",
      until: "2022",
    },
  ];

  return (
    <div className="content-box">
      <h2 data-aos="fade-right" data-aos-offset="50">
        Estudios
      </h2>
      <div className="row m-0">
        <div className="col">
          {education.reverse().map((item, i) => {
            return (
              <div
                data-aos={i & 1 ? "fade-left" : "fade-right"}
                data-aos-offset="50"
                className="card text-dark bg-light shadow-sm mb-3"
                key={i}
              >
                <div className="text-white bg-dark card-header fs-6">
                  {item.since + " - " + item.until}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{item.title}</b>
                  </h5>
                  <p className="card-text">{item.institute}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
