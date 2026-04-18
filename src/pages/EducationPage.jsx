import PageHeader from "../components/PageHeader";
import { education } from "../data/portfolioData";

function EducationPage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Formation"
        title="Parcours academique"
        description="Une progression construite autour du developpement digital et des fondamentaux de l'informatique."
      />

      <div className="stack-list">
        {education.map((item) => (
          <article key={item.title} className="content-card timeline-card">
            <div className="timeline-top">
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.school}</p>
              </div>
              <span className="pill">{item.period}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default EducationPage;
