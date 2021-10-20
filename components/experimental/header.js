import React from "react";

function Header() {
  return (
    <>
      <div className="content-box">
        <img
          className="img-profile rounded-circle"
          src="https://i.ibb.co/RpmfcZd/CvFoto.jpg"
          alt="profileImg"
        />
        <h1 id="name">Lescano Leandro</h1>
        <h2 id="name" className="pl-2">
          Lescano Leandro
        </h2>
        <h4>Fullstack Developer</h4>
        <h2 className="short-desc mb-0">Fullstack Developer</h2>
      </div>
    </>
  );
}

export default Header;
