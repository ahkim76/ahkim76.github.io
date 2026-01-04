function About() {
  return (
    <section id="about" className="section hero">
      <h1>Alex Kim</h1>
      <p>
        I'm a current junior at UNC-Chapel Hill studying Computer Science (BS)
        with minors in Data Science and Philosophy. As a software engineer, I
        have experience in backend infra, distributed systems, and applied AI
        work. My focus is building reliable systems that scale and behave
        correctly under load.
      </p>
      <p>
        Previously, I worked on microservice deployments, Kubernetes
        containerization, cloud infra, and large data systems across companies
        like Dematic and Toshiba. I'm currently working on infrastructure at
        Stripe.
      </p>
      <p>
        Outside of coding, I enjoy playing the drums, training SBD (squat,
        bench, deadlift), and studying reformed theology. I care a lot about
        getting better and staying curious
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
      </div>
    </section>
  );
}

export default About;
