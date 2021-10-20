import React from "react";
import Header from "../components/experimental/header";
import Layout from "../components/experimental/Layout";
import About from "../components/experimental/about";

function experimental() {
  return (
    <Layout>
      <div className="test-scroll">
        <Header />
        <About />
      </div>
    </Layout>
  );
}

export default experimental;
