function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <p className="contact-text">
        The best way to reach me is by email, but I’m also active on LinkedIn
        and GitHub.
      </p>

      <div className="contact-links">
        <a href="mailto:youremail@unc.edu" className="btn contact-linka">
          Email me
        </a>

        <a
          href="https://github.com/ahkim76"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/alex-h-kim"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
