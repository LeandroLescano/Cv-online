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
      img: "https://i.gyazo.com/fc12e9e07345fd071dceacce4c0a5e34.png",
      link: "https://thefatmonkeydeco.com.ar/",
    },
  ];

  return (
    <div className="content-box">
      <h2>Portfolio</h2>
      {port.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.img} width="500" alt="imgPort" loading="lazy" />;
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
