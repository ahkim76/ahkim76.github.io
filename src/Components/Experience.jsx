function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <ul>
        <div className="experience-item">
          <div className="experience-heading">
            <h3 className="company">Apple</h3>

            <div className="role-row">
              <span className="role">Incoming Software Engineer Intern</span>
              <span className="dot">•</span>
              <span className="team">ASE Commerce Engineering Team</span>
              <span className="date">Summer 2026</span>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>
              Will work on backend infrastructure maintaining the commerce
              systems for Apple media products.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-heading">
            <h3 className="company">Stripe</h3>

            <div className="role-row">
              <span className="role">Software Engineer Intern</span>
              <span className="dot">•</span>
              <span className="team">Developer Infrastructure Team</span>
              <span className="date">Winter/Spring 2026</span>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>
              Built Ruby + GraphQL evaluation infra for Stripe’s internal search
              engines used by 99% of engineers.
            </li>
            <li>
              Implemented a repeatable offline eval harness to compare response
              quality across models, prompts, and RAG retrieval configs,
              enabling safe iteration.
            </li>
            <li>
              Designed LLM - as - judge scoring with baseline diffing over a
              100+ query dataset in MongoDB, informing production search tuning
              and platform adoption.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-heading">
            <h3 className="company">Mercor</h3>

            <div className="role-row">
              <span className="role">Machine Learning Engineer</span>
              <span className="dot">•</span>
              <span className="team">Project Aeneas</span>
              <span className="date">Contract 2025-2026</span>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>
              Generated multi-step reasoning trajectories for fine-tuning of
              Meta’s Code World Model (CWM), guiding the LLM through analysis,
              coding, debugging, and evaluation steps in ML workflows.
            </li>
            <li>
              Corrected reasoning errors, invalid tool calls, and code execution
              failures, improving the quality and reliability of training
              trajectories by 25%.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-heading">
            <h3 className="company">Toshiba Global Commerce Solutions</h3>

            <div className="role-row">
              <span className="role">Software Engineer Intern</span>
              <span className="dot">•</span>
              <span className="team">Hardware Engineering Team</span>
              <span className="date">Fall 2025</span>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>
              Drove the end-to-end development of an AI Agent tool with Python
              (Django), deployed to 10K+ retail users to streamline internal
              support.
            </li>
            <li>
              Implemented retrieval-augmented generation (RAG) pipelines via
              Azure AI Search and LangChain, enabling sub 1s responses across
              200K+ docs and improving support efficiency.
            </li>
            <li>
              Built automated ingestion scripts that normalized docs into vector
              stores, cutting manual prep time by 90%.
            </li>
            <li>
              Deployed on Kubernetes with robust integration tests and readiness
              via documentation + Agile sprints.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-heading">
            <h3 className="company">Dematic</h3>

            <div className="role-row">
              <span className="role">Software Engineer Intern</span>
              <span className="dot">•</span>
              <span className="team">R&D Mobile Applications Team</span>
              <span className="date">Summer 2025</span>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>
              Developed production-ready features for the Dematic Workflow
              Engine used at 3,000+ warehouse sites.
            </li>
            <li>
              Architected a dockerized Spring Boot microservice with PostgreSQL,
              handling 100K+ license records.
            </li>
            <li>
              Engineered a React + Java based word-management system supporting
              30K+ words under 1s latency.
            </li>
            <li>
              Automated GCP deployment using Terraform + Helm, cutting setup
              time by 50% and improving CI/CD.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-heading">
            <h3 className="company">UNC College of Arts and Sciences</h3>

            <div className="role-row">
              <span className="role">Information Technology Analyst</span>
              <span className="dot">•</span>
              <span className="team">OASIS</span>
              <span className="date">Work-Study 2024-2025</span>
            </div>
          </div>

          <ul className="experience-bullets">
            <li>
              Provided Tier 1 technical support to faculty, professors, and
              students in the Arts and Sciences department.
            </li>
            <li>
              Created clear technical documentation and knowledge base articles,
              improving resolution speed and reducing repeated support requests.
            </li>
          </ul>
        </div>
      </ul>
    </section>
  );
}

export default Experience;
