import PageHeader from "../components/PageHeader";
import { languages, skills } from "../data/portfolioData";

function SkillsPage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Competences"
        title="Stack technique et methodes"
        description="Une base solide en developpement web, integration d'API, bases de donnees, cloud et methodes agiles."
      />

      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.category} className="content-card">
            <h3>{group.category}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="content-card languages-card">
        <h3>Langues</h3>
        <div className="tag-list">
          {languages.map((language) => (
            <span key={language} className="tag">
              {language}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export default SkillsPage;
