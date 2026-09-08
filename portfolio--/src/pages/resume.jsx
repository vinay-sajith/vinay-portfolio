import resume from "../assets/Resume.pdf";

function Resume() {
  return (
    <div className="resume-page">

      <div className="resume-heading">
        <p>03 / RESUME</p>

        <h1>
          my <span>resume.</span>
        </h1>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          OPEN FULL RESUME ↗
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src={resume}
          title="Vinay Sajith Resume"
        />
      </div>

    </div>
  );
}

export default Resume;