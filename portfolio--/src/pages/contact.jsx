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
  viewBox="0 0 420 420"
  aria-label="WannaContact?"
>
  <defs>
   <path
  id="contactCircle"
  d="M 105 210 A 105 105 0 0 1 315 210"
  fill="none"
/>
  </defs>

  <text>
    <textPath
      href="#contactCircle"
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