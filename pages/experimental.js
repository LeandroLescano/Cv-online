import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/experimental/about";
import Education from "../components/experimental/education.js";
import Experience from "../components/experimental/experience.js";
import Header from "../components/experimental/header.js";
import Portfolio from "../components/experimental/portfolio.js";
import Skills from "../components/experimental/skills.js";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import Darkmode from "darkmode-js";

const options = {
  label: "🌓",
};

new Darkmode(options).showWidget();

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1750);
  }, []);

  return (
    <div className={styles.container} id="body">
      <Head>
        <title>CV | Lescano Leandro</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="author" content="Lescano Leandro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Curriculum Vitae de Lescano Leandro Nicolas"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.main}>
        {/* <StartPage styles={styles} /> */}
        <Header />
        <div>
          <About />
          <Skills />
          <Education />
          <Experience />
          <Portfolio />
        </div>
      </main>
    </div>
  );
}
