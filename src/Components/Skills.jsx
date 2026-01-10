function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skills-group">
          <h3>Languages</h3>
          <div className="skills-chips">
            <span>Python</span>
            <span>Go</span>
            <span>Java</span>
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-chips">
            <span>React.js</span>
            <span>Express.js</span>
            <span>Node.js</span>
            <span>Next.js</span>
            <span>Spring Boot</span>
            <span>Django</span>
            <span>Gin</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Tools & Platforms</h3>
          <div className="skills-chips">
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>Terraform</span>
            <span>Helm</span>
            <span>PostgreSQL</span>
            <span>Git</span>
            <span>GCP</span>
            <span>AWS</span>
            <span>Azure</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Concepts</h3>
          <div className="skills-chips">
            <span>REST APIs</span>
            <span>Distributed Systems</span>
            <span>CI/CD</span>
            <span>Cloud Computing</span>
            <span>Unit Testing</span>
            <span>Integration Testing</span>
            <span>End-to-End Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
