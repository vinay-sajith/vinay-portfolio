import anthropicLogo from "../assets/anthropicres.jpg";
import openaiLogo from "../assets/chat-gpt.png";
import walmartLogo from "../assets/walmart.png";

function Certificates() {
  const certificates = [
    {
      title: "Agents and Workflows",
      issuer: "OpenAI",
      date: "Issued Sep 2026",
      logo: openaiLogo,
      link: "https://academy.openai.com/home/certificate/nrg9gmhnds",
    },
    {
      title: "Claude Academy: AI Fluency: Framework & Foundations",
      issuer: "Anthropic",
      date: "Issued Sep 2026",
      logo: anthropicLogo,
      link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_695eb780487d6ae0f5d2f1a6_1768468934157_completion_certificate.pdf",
    },
    {
      title: "Walmart USA - Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Issued Jan 2026",
      logo: walmartLogo,
      link: "https://academy.claude.com/verify/05d721ce64047cbcd896c7b7a5b8ef24",
    },
  ];

  return (
    <main className="certificates-page">

      <section className="certificates-heading">
        <p>CERTIFICATES</p>

        <h1>
          things i've <span>earned.</span>
        </h1>

        <p className="certificates-intro">
          certificates and credentials i've picked up
          along the way.
        </p>
      </section>

      <section className="certificate-list">

        {certificates.map((certificate, index) => (
          <article className="certificate-item" key={certificate.credential}>

            <div className="certificate-logo">
              <img
                src={certificate.logo}
                alt={`${certificate.issuer} logo`}
              />
            </div>

            <div className="certificate-info">

              <p className="certificate-number">
                0{index + 1}
              </p>

              <h2>{certificate.title}</h2>

              <p className="certificate-issuer">
                {certificate.issuer}
              </p>

              <p className="certificate-date">
                {certificate.date}
              </p>

              

              <a
                className="certificate-button"
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                SHOW CREDENTIAL ↗
              </a>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}

export default Certificates;