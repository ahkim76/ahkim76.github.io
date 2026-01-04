function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">Distributed Job Queue</h3>
            <span className="project-meta">
              Go · PostgreSQL · Docker · Kubernetes
            </span>
          </div>

          <p className="project-description">
            Distributed background job system with horizontally scalable
            workers, at-least-once delivery, and crash-safe retries using
            PostgreSQL as the coordination layer.
          </p>

          <ul className="project-bullets">
            <li>
              Supports multiple queues, priority, and delayed jobs using
              visibility windows.
            </li>
            <li>
              Implements lease-based worker claiming and dead-letter queue for
              failed jobs.
            </li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/your-handle/job-queue"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Repeat cards for HeelSync, etc. */}
      </div>
    </section>
  );
}

export default Projects;
