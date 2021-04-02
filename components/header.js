import React, { useEffect, useState } from "react";

function Header() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("headerSeparator").style.width = "100%";
    }, 1000);
  }, []);

  return (
    <>
      <div className="header-box row align-items-center">
        <div
          className="col-auto col-lg-4 order-lg-2 fadeInProfile"
          align="center"
        >
          <img
            className="img-profile rounded-circle"
            src="https://i.ibb.co/RpmfcZd/CvFoto.jpg"
            alt="profileImg"
          />
        </div>
        <div
          className="col-9 d-none d-lg-block col-lg-4 order-lg-1 fadeInLeft"
          align="right"
        >
          <h1 id="name">Lescano Leandro</h1>
        </div>
        <div className="col-auto p-0 d-lg-none fadeInRight" align="right">
          <h2 id="name" className="pl-2">
            Lescano Leandro
          </h2>
          <h4>Fullstack Developer</h4>
        </div>
        <div className="col-8 col-lg-4 d-none d-lg-block order-lg-3 fadeInRight">
          <h2 className="short-desc mb-0">Fullstack Developer</h2>
        </div>
      </div>
      <hr id="headerSeparator" />
    </>
  );
}

export default Header;
