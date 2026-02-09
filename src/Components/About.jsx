function About() {
  return (
    <section id="about" className="section hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Alex Kim</h1>

          <p>
            I'm a 1st generation student at UNC-Chapel Hill from Chicago
            studying Computer Science. As a software engineer, I have experience
            in backend infrastructure, distributed systems, and applied AI work.
            My focus is on building reliable systems that scale and behave
            correctly under load.
          </p>

          <p>
            I'm currently working on developer infrastructure at Stripe,
            building internal tools and search engines used by thousands of
            engineers and product teams. This summer, I'll be at Apple working
            on services behind the App Store, Apple Music, Apple TV, Podcasts,
            etc.
          </p>

          <p className="hero-contact">
            If you find my work interesting or just want to chat, message me on
            LinkedIn or email{" "}
            <span className="mono">alexhkim [at] unc [dot] edu</span>
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/YOUR_GITHUB"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/alex-h-kim"
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
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src="/headshot.jpg" alt="Alex Kim" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
