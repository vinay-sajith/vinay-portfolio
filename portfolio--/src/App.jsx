import React, { useState, useEffect } from "react";
import portrait from "./assets/vinay-portrait.png";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import PageTransition from "./PageTransition";
import ignouLogo from "./assets/ignou-logo.png";


/* =================================
   LOADING SCREEN
================================= */

function Loader({ onFinish }) {

  const messages = [
    "hello.",
    "नमस्ते",
    "ഹലോ",
    "こんにちは",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);


  useEffect(() => {

    const interval = setInterval(() => {

      setVisible(false);

      setTimeout(() => {

        setIndex((prev) => {

          if (prev === messages.length - 1) {

            clearInterval(interval);

            onFinish();

            return prev;
          }

          return prev + 1;

        });

        setVisible(true);

      }, 300);

    }, 1000);


    return () => {
      clearInterval(interval);
    };

  }, [onFinish]);


  return (
    <div
      className={`loader ${
        visible
          ? "loader-visible"
          : "loader-hidden"
      }`}
    >
      {messages[index]}
    </div>
  );
}


/* =================================
   HOME
================================= */

function Home() {

  return (

    <main id="home">


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="portrait-wrapper">


          {/* Curved Name */}

          <svg
            className="name-curve"
            viewBox="0 0 420 180"
            aria-label="Vinay Sajith"
          >

            <defs>

              <path
                id="nameArc"
                d="M 45 135 Q 210 -55 375 135"
                fill="none"
              />

            </defs>


            <text>

              <textPath
                href="#nameArc"
                startOffset="50%"
              >
                VINAYSAJITH
              </textPath>

            </text>

          </svg>


          {/* Portrait */}

          <div className="portrait">

            <img
              src={portrait}
              alt="Vinay Sajith"
            />

          </div>


        </div>


        {/* Main introduction */}

        <h1>
          I'm somewhat of a{" "}
          <span>coder</span>{" "}
          myself.
        </h1>


        <p className="intro">

          I like building things before I fully know
          how to build them. I experiment, break things,
          figure them out, and learn along the way.

        </p>


      </section>



      {/* =========================
          SKILLS
      ========================= */}

      <section className="skills-section">

        <div className="section-inner">


          <h2>
            SKILL STACK
          </h2>


          {/* Development */}

          <div className="skill-group">

            <h3>

              <span className="skill-star">
                ✦
              </span>

              Development

            </h3>


            <div className="skills">

              <span>
                Python
              </span>

              <span>
                C++
              </span>

              <span>
                Java
              </span>

                <span>
                Django
              </span>
                <span>
                React
              </span>
                <span>
                SQL
              </span>
                <span>
                JavaScript
              </span>

            </div>

          </div>



          {/* Creative */}

          <div className="skill-group">

            <h3>

              <span className="skill-star">
                ✦
              </span>

              Creative

            </h3>


            <div className="skills">

              <span>
                Figma
              </span>

            </div>

          </div>



          {/* AI & DevOps */}

          <div className="skill-group">

            <h3>

              <span className="skill-star">
                ✦
              </span>

              AI &amp; DevOps
4

            </h3>


            <div className="skills">

              <span>
                GitHub
              </span>

              <span>
                Prompt Engineering
              </span>

            </div>

          </div>


        </div>

      </section>



      {/* =========================
          EDUCATION
      ========================= */}

      <section className="education-section">

        <div className="section-inner">


          <h2>
            MY EDUCATION
          </h2>


          <div className="education-card">


            <div className="education-mark">
  <img src={ignouLogo} alt="IGNOU logo" />
</div>

            <div className="education-content">

              <h3>
                Indira Gandhi National Open University
              </h3>

              <p>
                Bachelor of Computer Applications (BCA)
              </p>

            </div>


          </div>


        </div>

      </section>


    </main>

  );
}


/* =================================
   APP
================================= */

function App() {

  const [loading, setLoading] = useState(true);


  /* Show loader first */

  if (loading) {

    return (
      <Loader
        onFinish={() => setLoading(false)}
      />
    );

  }


  /* Main application */

  return (

    <BrowserRouter basename="/vinay-portfolio">

      <div className="site">


        {/* =========================
            TOP NAVIGATION
        ========================= */}

        <header className="top-nav">

          <Link to="/">
            HOME
          </Link>


          <Link to="/about">
            ABOUT
          </Link>

<Link
  to="/"
  className="flame-logo"
  aria-label="Home"
>
  <span className="flame-icon">🔥</span>
</Link>


          <Link to="/resume">
            RESUME
          </Link>


          <Link to="/contact">
            CONTACT
          </Link>

        </header>



        {/* =========================
            ROUTES
        ========================= */}

        <PageTransition>

  <Routes>

    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/about"
      element={<About />}
    />

    <Route
      path="/resume"
      element={<Resume />}
    />

    <Route
      path="/contact"
      element={<Contact />}
    />

  </Routes>

</PageTransition>


        {/* =========================
            BOTTOM NAVIGATION
        ========================= */}

        <nav className="bottom-nav">

          <Link to="/dev">
            DEV
          </Link>

          <Link to="/hobbies">
            HOBBIES
          </Link>

          <Link to="/learn">
            LEARN
          </Link>

        </nav>


      </div>

    </BrowserRouter>

  );

}


export default App;