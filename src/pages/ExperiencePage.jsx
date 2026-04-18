import PageHeader from "../components/PageHeader";
import { experiences } from "../data/portfolioData";

function ExperiencePage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Experience"
        title="Experience professionnelle"
        description="Une experience pratique en developpement full stack, orientee interface utilisateur et bonnes pratiques de production."
      />

      <div className="stack-list">
        {experiences.map((experience) => (
          <article key={experience.company} className="content-card timeline-card">
            <div className="timeline-top">
              <div>
                <h3>{experience.role}</h3>
                <p className="muted">{experience.company}</p>
              </div>
              <span className="pill">{experience.period}</span>
            </div>
            <ul className="detail-list">
              {experience.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;
