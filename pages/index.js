import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/Link";
import Rain from "../components/atom/rain";
import Darkmode from "darkmode-js";

function index() {
  return (
    <Layout>
      <div className="index-container">
        <div className="bored splat-toggle">
          <Rain />
          <button className="button">Descargar Cv normal</button>
        </div>
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
