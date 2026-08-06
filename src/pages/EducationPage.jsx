import PageHeader from "../components/PageHeader";
import { education, diplomas } from "../data/portfolioData";

function EducationPage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Formation"
        title="Parcours académique & Diplômes"
        description="Une progression construite autour du développement digital, des fondamentaux de l'informatique et des diplômes officiels."
      />

      <section>
        <h2 className="section-title" style={{ margin: "1.5rem 0 1rem", fontFamily: "Sora, sans-serif", fontSize: "1.6rem", color: "var(--accent)" }}>
          Parcours académique
        </h2>
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
      </section>

      {diplomas && diplomas.length > 0 && (
        <section style={{ marginTop: "2.5rem" }}>
          <h2 className="section-title" style={{ margin: "0 0 1.25rem", fontFamily: "Sora, sans-serif", fontSize: "1.6rem", color: "var(--accent)" }}>
            Diplômes officiels
          </h2>
          <div className="cert-grid">
            {diplomas.map((diploma) => (
              <article key={diploma.title} className="content-card cert-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", marginBottom: "0.25rem", display: "inline-block" }}>
                    {diploma.school}
                  </span>
                  <h3 style={{ fontSize: "1.15rem", lineHeight: "1.4", margin: "0 0 0.5rem" }}>
                    {diploma.title}
                  </h3>
                  <p style={{ margin: "0 0 0.25rem", fontSize: "0.95rem" }}>
                    Spécialité : <strong style={{ color: "var(--text)" }}>{diploma.specialty}</strong>
                  </p>
                  <p className="muted" style={{ margin: "0", fontSize: "0.85rem" }}>
                    {diploma.location} • {diploma.date}
                  </p>
                </div>
                <div style={{ marginTop: "1.25rem" }}>
                  <a className="cert-link" href={diploma.pdf} target="_blank" rel="noreferrer">
                    Ouvrir le PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default EducationPage;
