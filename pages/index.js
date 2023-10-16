import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Rain from "../components/atom/rain";

function index() {
  return (
    <Layout>
      <div className="index-container">
        <div className="bored">
          <a
            href="/CVLescanoLeandroN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="splat-toggle"
          >
            <Rain />
            <button className="button">Descargar Cv normal</button>
          </a>
        </div>
        <div className="web">
          <Link href="/curriculum">
            <button className="button">Ver Cv Web</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default index;
