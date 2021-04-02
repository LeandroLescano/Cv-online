import React, { useEffect } from "react";

function Custom404() {
  useEffect(() => {
    let c = document.getElementById("canv");
    let $ = c.getContext("2d");
    let w = c.width;
    let h = c.height;
    let id = $.createImageData(w, h);

    function draw() {
      window.requestAnimationFrame(draw);
      var r;
      for (var p = 4 * (w * h - 1); p >= 0; p -= 4) {
        r = Math.random();
        id.data[p] = id.data[p + 1] = id.data[p + 2] = 255 * Math.pow(r, 1.6);
        id.data[p + 3] = 255;
      }
      $.putImageData(id, 0, 0);
    }

    draw();
  }, []);

  return (
    <div className="container-404">
      <svg className="overlay text" viewBox="0 0 900 400">
        <symbol id="main">
          <text textAnchor="middle" x="50%" y="50%" dy="0.25em" className="txt">
            404
          </text>
          <text
            textAnchor="middle"
            x="50%"
            y="90%"
            dy="0.25em"
            className="txt2"
          >
            Not Found
          </text>
        </symbol>
        <mask
          id="msk"
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" className="wrap"></rect>
          <use xlinkHref="#main" className="mtxt"></use>
        </mask>
      </svg>
      <section className="section-404">
        <h1 className="h1-404" href="#">
          <div className="fill">
            <canvas
              id="canv"
              width="460"
              height="360"
              style={{ background: "hsla(0, 0%, 0%, 1)" }}
            ></canvas>
          </div>
          <svg width="100%" height="100%" className="inv">
            <rect
              width="100%"
              height="100%"
              mask="url(#msk)"
              className="rect"
            />
            <use xlinkHref="#main" className="clear"></use>
          </svg>
        </h1>
      </section>
    </div>
  );
}

export default Custom404;
