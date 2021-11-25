const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h3 className="tittle3 footer__tittle3">
        No dudes en contactar conmigo ¡hablemos!
      </h3>
      <div className="footer__link">
        <a
          className="footer__link"
          href="mailto:lucia.r.nova@gmail.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="far fa-envelope"></i>
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/luciarodrigueznova/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer__copy">
        <p className="">&copy; 2021 Lucía Rodríguez Nova</p>
      </div>
    </footer>
  );
};

export default Footer;
