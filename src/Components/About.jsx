function About() {
  return (
    <section id="about" className="section hero">
      <h1>Alex Kim</h1>
      <p>
        I'm a 1st generation student at UNC-Chapel Hill from Chicago studying
        Computer Science (BS). As a software engineer, I have experience in
        backend infra, distributed systems, and applied AI work. My focus is
        building reliable systems that scale and behave correctly under load.
      </p>
      <p>
        I'm currently working on developer infrastructure at Stripe, building
        internal tools and search engines used by thousands of engineers and
        product teams. This summer, I'll be at Apple working on backend
        infrastructure for services behind the App Store, Apple Music, Podcasts,
        etc. These services include all commerce transactions and subscription
        lifecycle management
      </p>
      <div className="hero-buttons">
        <a href="/resume.pdf" className="btn" target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <a
          href="https://github.com/ahkim76"
          className="btn-outline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/alex-h-kim"
          className="btn-outline"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/poopitypoop/"
          className="btn-outline"
          target="_blank"
          rel="noreferrer"
        >
          LeetCode
        </a>
      </div>
    </section>
  );
}

export default About;
