import { useEffect, useRef } from "react";

function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".project-card"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid" ref={gridRef}>
        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">Distributed Job Queue</h3>
            <span className="project-meta">
              Go · PostgreSQL · Docker · Kubernetes
            </span>
          </div>

          <p className="project-description">
            (Currently in production) Distributed background job system with
            horizontally scalable workers, at-least-once delivery, and
            crash-safe retries using PostgreSQL as the coordination layer.
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
              className="project-link"
            >
              GitHub <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">HeelSync</h3>
            <span className="project-meta">
              Next.js · React.js · Supabase · Tailwind CSS
            </span>
          </div>

          <p className="project-description">
            Full-stack productivity platform for UNC students, made to
            streamline course scheduling and academic planning for 3,500+
            classes per semester.
          </p>

          <ul className="project-bullets">
            <li>
              Contains scalable API routes for real-time syncing, user
              authentication, and secure data access for all events.
            </li>
            <li>
              Includes a study abroad map made w/ Leaflet and web-scraped
              HeelsAbroad data to visualize opportunities.
            </li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/your-handle/heelsync"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <h3 className="project-title">Powerlifting Performance Tracker</h3>
            <span className="project-meta">Java · JavaFX · SQLite</span>
          </div>

          <p className="project-description">
            First "real-world" project I built in Summer 2024 after taking a
            Data Structures class. Desktop app featuring a GPT-powered chatbot
            and powerlifting data analysis.
          </p>

          <ul className="project-bullets">
            <li>
              Supports CRUD for workouts + lifts, stored in SQLite and in-memory
              structures.
            </li>
            <li>
              Uses MVC and Singleton patterns for modularity across UI and
              logic.
            </li>
          </ul>

          <div className="project-links">
            <a
              href="https://github.com/your-handle/powerlifting-tracker"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
