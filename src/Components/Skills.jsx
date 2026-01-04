function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skills-group">
          <h3>Languages</h3>
          <div className="skills-chips">
            <span>Go</span>
            <span>Java</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-chips">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Express</span>
            <span>Node.js</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Tools & Platforms</h3>
          <div className="skills-chips">
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>PostgreSQL</span>
            <span>Git</span>
            <span>GCP</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Other</h3>
          <div className="skills-chips">
            <span>REST APIs</span>
            <span>Distributed Systems</span>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
