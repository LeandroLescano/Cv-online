import React, { useEffect, useState } from "react";
import Image from "next/image";

function Experience() {
  const [exp, setExp] = useState([
    {
      place: "Municipalidad de Tigre",
      area: "Innovación",
      position: "Programador",
      since: "08/03/2021",
      until: "Actualidad",
      duration: "",
      img: "/logoTigre.png",
    },
    {
      place: "Municipalidad de Tigre",
      area: "Recursos Humanos",
      position: "Administrativo",
      since: "22/10/2018",
      until: "08/03/2021",
      duration: "",
      img: "/logoTigre.png",
    },
    {
      place: "Vincar S.A",
      area: "Administración",
      position: "Monitoreo de camiones",
      since: "16/04/2018",
      until: "22/10/2018",
      duration: "",
      img: null,
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    var temp = exp;
    temp.map((item) => {
      let monthS = item.since.substring(3, 5);
      let yearS = item.since.substring(6, 10);
      let monthE, yearE;
      if (item.until === "Actualidad") {
        let act = new Date();
        monthE = act.getMonth() + 1;
        yearE = act.getYear();
        if (yearE > 100) {
          yearE += 1900;
        }
      } else {
        monthE = item.until.substring(3, 5);
        yearE = item.until.substring(6, 10);
      }
      let monthDiff;
      let yearDiff = yearE - yearS;
      if (yearDiff > 0 && monthS > monthE) {
        yearDiff--;
      }
      if (monthS < monthE) {
        monthDiff = monthE - monthS;
      } else if (monthS == monthE) {
        monthDiff = 0;
      } else {
        monthDiff = monthE - monthS + 12;
      }

      if (yearDiff > 1) {
        item.duration = "(" + yearDiff + " años";
      } else if (yearDiff == 1) {
        item.duration = "(" + yearDiff + " año";
      }

      if (!item.duration == "") {
        item.duration += " y ";
      } else {
        item.duration = "(";
      }
      if (monthDiff == 1) {
        item.duration += monthDiff + " mes)";
      } else if (monthDiff > 0) {
        item.duration += monthDiff + " meses)";
      } else if (monthDiff == 0) {
        item.duration += "1 mes)";
      } else {
        item.duration += ")";
      }
      return { ...item };
    });
    setExp([...temp]);
  }, []);

  return (
    <div className="content-box">
      <h2>Experiencia</h2>
      <div className="row m-0">
        <div className="col">
          {exp.map((item, i) => {
            return (
              <div
                data-aos={
                  !isMobile ? "fade" : i & 1 ? "fade-left" : "fade-right"
                }
                className="card text-dark bg-light shadow-sm mb-3"
                key={i}
              >
                <div className="row g-0">
                  <div
                    className="d-none d-md-flex col-md-2 bg-dark align-items-center img-experience"
                    data-aos="fade-right"
                  >
                    {item.img != null ? (
                      <Image
                        src={item.img}
                        height={50}
                        width={50}
                        layout="responsive"
                        loading="lazy"
                        alt="LogoCompany"
                        className="p-4"
                      />
                    ) : (
                      <p className="text-white fw-bold m-auto">{item.place}</p>
                    )}
                  </div>
                  <div
                    className="col-md-10"
                    data-aos={!isMobile ? "fade-left" : ""}
                  >
                    <div className="card-header fs-6">
                      {`${item.since} - ${item.until}`}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.place}</h5>
                      <p className="card-text">
                        {item.position} - {item.area}
                        <br />
                        {item.duration}
                      </p>
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

export default Experience;
