import React, { useEffect, useState } from "react";

function Header() {
  return (
    <>
      <div className="header-box row align-items-center">
        <div className="col-4 col-lg-4 order-lg-2" align="center">
          <img
            className="img-profile rounded-circle"
            src="https://i.ibb.co/RpmfcZd/CvFoto.jpg"
            alt="profileImg"
          />
        </div>
        <div
          className="col-9 d-none d-lg-block col-lg-4 order-lg-1"
          align="right"
        >
          <h1 id="name">Lescano Leandro</h1>
        </div>
        <div className="col-8 d-lg-none" align="right">
          <h2 id="name" className="pl-2">
            Lescano Leandro
          </h2>
          <h5>Fullstack Developer</h5>
        </div>
        <div className="col-8 col-lg-4 d-none d-lg-block  order-lg-3">
          <h3 className="short-desc">Fullstack Developer</h3>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
