const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="arrow">
        <a href="#header">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
      <h3 className="title3">Contacto</h3>
      <p className="footer__tittle3">
        No dudes en contactar conmigo ¡hablemos!
      </p>
      <div className="footer__item">
        <a
          className="footer__item__link"
          href="mailto:lucia.r.nova@gmail.com/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="far fa-envelope"></i>
          <p className="">Mail</p>
        </a>
        <a
          className="footer__item__link"
          href="https://www.linkedin.com/in/luciarodrigueznova/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <p className="">Linkedin</p>
        </a>
      </div>

      <small className="footer__copy">
        <p className="">&copy; 2021 Lucía Rodríguez Nova</p>
      </small>
    </footer>
  );
};

export default Footer;
