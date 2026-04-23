import { NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

const links = [
  { to: "/", label: "Profil", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projets", label: "Projets" },
  { to: "/competences", label: "Competences" },
  { to: "/formation", label: "Formation" },
  { to: "/certifications", label: "Certifications" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="avatar-shell">
          <img className="avatar-image" src="/images/profile-photo.png" alt="Photo de Khalid Demnati" />
        </div>
        <div>
          <p className="eyebrow">Portfolio React</p>
          <h1>{personalInfo.name}</h1>
          <p className="brand-role">{personalInfo.role}</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Navigation principale">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-note">
        <p>{personalInfo.tagline}</p>
      </div>
    </aside>
  );
}

export default Sidebar;
