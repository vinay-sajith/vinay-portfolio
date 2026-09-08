import portrait from "../assets/vinay-portrait.png";
import git from "../assets/git.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";

function Contact() {
  return (
    <main className="contact-page">

      {/* CONTACT HERO */}
      <section className="contact-hero">

        <svg
          className="contact-name-curve"
          viewBox="0 0 420 180"
          aria-label="Wanna Contact?"
        >
          <defs>
            <path
              id="contactArc"
              d="M 45 135 Q 210 -55 375 135"
              fill="none"
            />
          </defs>

          <text>
            <textPath
              href="#contactArc"
              startOffset="50%"
              textAnchor="middle"
            >
              wanna contact?
            </textPath>
          </text>
        </svg>

        <div className="contact-portrait">
          <img src={portrait} alt="Vinay Sajith" />
        </div>

        <h2 className="contact-title">
          touch me
        </h2>

      </section>


      {/* MESSAGE */}
      <section className="contact-content">

        <p>
          if you wanna get in touch, feel free to connect
          with me over your preferred way and i'll get back to you :)
        </p>


        {/* SOCIAL LINKS */}
        <div className="contact-links">

          <a href="https://github.com/vinay-sajith" aria-label="GitHub">
            <img src={git} alt="GitHub" />
          </a>

          <a
  href="mailto:vinaysajith645@gmail.com"
  aria-label="Email"
>
  <img src={gmail} alt="Email" />
</a>

          <a href="https://www.linkedin.com/in/vinay-sajith/" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;