import { personalInfo } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-title">Contact</p>
        <p>{personalInfo.email}</p>
      </div>
      <div>
        <p className="footer-title">Telephone</p>
        <p>{personalInfo.phone}</p>
      </div>
      <div>
        <p className="footer-title">Localisation</p>
        <p>{personalInfo.location}</p>
      </div>
      <div className="footer-links">
        <a className="footer-link" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="footer-link" href={personalInfo.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
