const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <section className="container">
        <p>Mohamed Sadiq IKBAL, PhD - Robotics Software Engineer</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mohamed-sadiq-ikbal-98211582/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/MSIhub"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.researchgate.net/profile/Mohamed_Sadiq_Ikbal2"
            aria-label="ResearchGate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-researchgate"></i>
          </a>
          {/* Add other social links as needed */}
        </div>
        <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {currentYear} MSIhub. All rights reserved.
          </p>
      </section>
    </footer>
  );
};

export default Footer;
