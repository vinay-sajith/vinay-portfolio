import portrait from "../assets/vinay-portrait.png";
import chess from "../assets/chess.jpeg";

function About() {
  return (
    <main className="about-page">

      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className="about-hero">

        <div className="about-hero-art">

          {/* Curved title */}
          <svg
            className="about-name-curve"
            viewBox="0 0 420 180"
            aria-label="Who am I?"
          >
            <path
              id="aboutArc"
              d="M 45 135 Q 210 -55 375 135"
              fill="none"
            />

            <text>
              <textPath
                href="#aboutArc"
                startOffset="50%"
                textAnchor="middle"
              >
                who am i?
              </textPath>
            </text>
          </svg>

          {/* Portrait */}
          <div className="about-portrait">
            <img
              src={portrait}
              alt="Vinay Sajith"
            />
          </div>

        </div>

        <h2 className="about-title">
          about me
        </h2>

      </section>


      {/* =========================
          INTRO
      ========================= */}

      <section className="about-writing">

        <p className="about-opening">
          who am i if not just my name, my degree,
          or the things i've learned to build?
        </p>

        <p>
          i'm vinay.
        </p>

        <p>
          i build things before i completely know how to build them.
          sometimes i know what i'm doing, sometimes i absolutely don't.
          i break things, figure out why they broke, fix them, and
          usually learn something i wasn't expecting to learn.
        </p>

        <p>
          i'm not the quickest learner. but when i start something,
          i don't really like leaving it unfinished. i'll keep working
          at it until i understand it well enough to make it work properly.
        </p>

        <p>
          and when i finally figure something out, i write it down.
          what i learned, what went wrong, what i still need to learn,
          and sometimes what i want to try next.
        </p>


        {/* =========================
            CHESS
        ========================= */}

        <div className="about-photo-block">

          <div className="chess-photo">
            <img
              src={chess}
              alt="Vinay playing chess"
            />
          </div>

          <p className="photo-caption">
            chess / something i keep coming back to
          </p>

        </div>

        <p>
          i play chess regularly. i like the fact that you can spend
          a long time thinking about one move and still realise
          immediately afterwards that it was probably a terrible one.
        </p>

        <p>
          but that's part of why i enjoy it. you make a move,
          see what happens, learn from it, and play again.
        </p>


        {/* =========================
            DJANGO STORY
        ========================= */}

        <div className="about-section-break">

          <p className="about-label">
            01 / FIRST DJANGO PROJECT
          </p>

          <h2>
            the project that taught me
            <span> the hard way.</span>
          </h2>

        </div>

        <p>
          one of the projects that taught me the most was my vehicle
          rental web application. it was my first django project,
          and it taught me much more than just how to use a framework.
        </p>

        <p>
          i learned about databases, migrations, urls, and how different
          parts of an application connect together.
        </p>

        <p>
          then my laptop had hardware problems and had to be repaired.
          i had backed up my project files to google drive — but i forgot
          to properly back up the database.
        </p>

        <p>
          the database was gone. some parts of the project were missing,
          and the url configuration had to be recreated.
        </p>

        <p>
          so i rebuilt what was missing, migrated the database,
          recreated the url configuration, and eventually got the
          project working again.
        </p>

        <p className="about-ending">
          it was a mess.
          <br />
          it was also one of the best lessons i got from a project.
        </p>


        {/* =========================
            HOW I LEARN
        ========================= */}

        <div className="about-section-break learn-break">

          <p className="about-label">
            02 / HOW I LEARN
          </p>

          <h2>
            i learn by <span>doing.</span>
          </h2>

        </div>

        <div className="learning-process">

          <div>BUILD</div>
          <span>↓</span>

          <div>BREAK</div>
          <span>↓</span>

          <div>FIGURE IT OUT</div>
          <span>↓</span>

          <div>WRITE IT DOWN</div>
          <span>↓</span>

          <div>BUILD AGAIN</div>

        </div>

      </section>

    </main>
  );
}

export default About;