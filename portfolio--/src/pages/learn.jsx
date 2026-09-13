function Learn() {
  const resources = [
  {
    area: "Machine Learning",
    topic: "ML From Scratch",
    link: "https://github.com/eriklindernoren/ml-from-scratch",
  },
  {
    area: "Portfolio",
    topic: "25 Portfolio Projects That Actually Get You Hired",
    link: "https://whop.com/instagram-e4a8/25-portfolio-projects-that-actually-get-you-hired/",
  },
  {
    area: "DevOps",
    topic: "DevOps Roadmap",
    link: "https://github.com/milanm/DevOps-Roadmap",
  },
  {
    area: "Programming",
    topic: "Build Your Own X",
    link: "https://github.com/codecrafters-io/build-your-own-x",
  },
  {
    area: "GitHub",
    topic: "Awesome GitHub Repositories",
    link: "https://github.com/avinash201199/Awesome-GitHub-Repositories",
  },
  {
    area: "AI Engineering",
    topic: "AI Engineering From Scratch",
    link: "https://github.com/rohitg00/ai-engineering-from-scratch",
  },
  {
    area: "Programming",
    topic: "Free Programming Books",
    link: "https://github.com/EbookFoundation/free-programming-books",
  },
  {
    area: "JavaScript",
    topic: "30 Days Of JavaScript",
    link: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
  },
  {
    area: "UI/UX",
    topic: "UI UX Pro Max Skill",
    link: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
  },
];
  return (
    <main className="learn-page">

      <section className="learn-heading">
        <p className="learn-label">LEARN</p>

        <h1>
          things i've <span>found.</span>
        </h1>

        <p className="learn-intro">
          useful things i've picked up along the way
          in pursuit of knowledge.
        </p>
      </section>

      <section className="learn-table">

        <div className="learn-row learn-header">
          <div>AREA</div>
          <div>TOPIC</div>
          <div>LINK</div>
        </div>

        {resources.map((resource, index) => (
          <div className="learn-row" key={index}>
            <div>{resource.area}</div>

            <div>{resource.topic}</div>

            <div>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN ↗
              </a>
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}

export default Learn;