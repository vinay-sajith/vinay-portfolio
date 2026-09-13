import goRent from "../assets/go-rent.jpg";
import skillLoop from "../assets/SkillLoop.png";
function Dev() {
  const projects = [
    {
      number: "01",
      status: "ACADEMIC PROJECT",
      title: "go rent",
      description:
        "an academic BCA project developed with Django. a web-based car rental platform connecting customers with rental agencies, allowing users to discover vehicles, make bookings, and manage their rentals.",
      image: goRent,
      github: "https://github.com/vinay-sajith/go-rent",
    },
    {
      number: "02",
      status: "ONGOING",
      title: "skillloop",
      description:
        "a peer-to-peer skill exchange platform i'm currently building with Django. people can teach what they know and learn what they want through mutual knowledge sharing.",
      image: skillLoop,
      github: "https://github.com/vinay-sajith",
    },
  ];

  return (
    <main className="dev-page">
      <section className="dev-heading">
        <p className="dev-label">DEV-PROJECTS</p>

        <h1>
          things i've <span>built.</span>
        </h1>

        <p className="dev-intro">
          some things i've worked on,
          broken, fixed, and learned from.
        </p>
      </section>

      <section className="dev-projects">
        {projects.map((project) => (
          <article className="dev-project" key={project.number}>

            <div className="dev-project-visual">
              <div className="dev-project-number">
                {project.number}
              </div>

              <img
                src={project.image}
                alt={`${project.title} project`}
              />
            </div>

            <div className="dev-project-writing">
              <p className="dev-project-label">
                {project.number} / {project.status}
              </p>

              <h2>{project.title}</h2>

              <p className="dev-project-description">
                {project.description}
              </p>

              <a
                className="github-button"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ON GITHUB ↗
              </a>
            </div>

          </article>
        ))}
      </section>
    </main>
  );
}

export default Dev;