function LinkContact() {
  return (
    <div className="linkContainer">
      <a
        href="https://github.com/LuciaRoNova3005/"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <i className="fab fa-github"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/luciarodrigueznova/"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <i className="fab fa-linkedin-in"></i>
        </span>
      </a>
      <a
        href="./CV-Lucia-Rodriguez-Nova-frontend-development.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <span className="">
          <i className="far fa-file-pdf"></i>
        </span>
      </a>
    </div>
  );
}

export default LinkContact;