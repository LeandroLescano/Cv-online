import {useEffect, useState} from "react";
import About from "../components/about.js";
import Education from "../components/education.js";
import Experience from "../components/experience.js";
import Header from "../components/header.js";
import Portfolio from "../components/portfolio.js";
import Skills from "../components/skills.js";
import AOS from "aos";
import Darkmode from "darkmode-js";
import Layout from "../components/Layout.js";
import styles from "../styles/Home.module.css";

const options = {
  label: "🌓",
};

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1750);
  }, []);

  new Darkmode(options).showWidget();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Layout>
          {/* <StartPage styles={styles} /> */}
          <Header />
          <div>
            <About />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
          </div>
        </Layout>
      </main>
    </div>
  );
}
