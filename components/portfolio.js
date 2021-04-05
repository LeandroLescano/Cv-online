import React from "react";

function Portfolio() {
  const port = [
    {
      name: "Generador de descuentos",
      desc:
        "Sistema para procesar descuentos extraídos del sistema Major. Realizado con ReactJS",
      img: "https://i.gyazo.com/70beec3c0d40b3d7bf753ab4bf835588.png",
      link: "https://generador-descuentos.firebaseapp.com/",
    },
    {
      name: "The fat monkey",
      desc:
        "Catálogo digital para emprendimiento de cerámicas. Realizado con ReactJS y Firebase",
      img: "https://i.gyazo.com/d7735a5dd90313d639b304d73115503d.png",
      link: "https://thefatmonkeydeco.com.ar/",
    },
    {
      name: "Click battle",
      desc:
        "Mini-juego competencia de clicks online. Realizado con ReactJS y Firebase",
      img: "https://i.gyazo.com/a88f6deb1c1f82cc23da4d62ee03aef7.png",
      link: "https://click-battle-mp.web.app/",
    },
    {
      name: "Curriculum online",
      desc: "Curriculum vitae online. Realizado con NextJS",
      img: "https://i.gyazo.com/48cbd31a5e6317587e8e178a0839ee24.png",
      link: "#",
    },
  ];

  return (
    <div className="content-box mb-5">
      <h2 data-aos="fade-right" data-aos-offset="10">
        Portfolio
      </h2>
      <div className="row g-2 wrapper">
        {port.map((item, i) => {
          return (
            <div
              key={i}
              className="col-lg-6 img-project"
              data-aos={i & 1 ? "flip-right" : "flip-left"}
            >
              <div className="card-portfolio">
                <img
                  src={item.img}
                  alt="imgPort"
                  loading="lazy"
                  className="shadow-sm img-fluid rounded"
                />
                <div className="info">
                  <h2>{item.name}</h2>
                  <p>
                    {item.desc}

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-lg-none"
                    >
                      {" - "}
                      <span>Visitar</span>
                    </a>
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="align-self-end"
                  >
                    <button className="btn btn-light fw-bold d-lg-block d-none">
                      Visitar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
