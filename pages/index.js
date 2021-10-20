import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Rain from "../components/atom/rain";

function index() {
  return (
    <Layout>
      <div className="index-container">
        <a
          href="/CVLescanoLeandroN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bored splat-toggle"
        >
          <Rain />
          <button className="button">Descargar Cv normal</button>
        </a>
        <Link href="/curriculum">
          <div className="web">
            <button className="button">Ver Cv Web</button>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default index;
