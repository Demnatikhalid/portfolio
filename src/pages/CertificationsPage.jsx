import PageHeader from "../components/PageHeader";
import { certifications } from "../data/portfolioData";

function CertificationsPage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Certifications"
        title="Certificats et badges"
        description="Les documents ont ete integres au portfolio et peuvent etre ouverts localement depuis cette page."
      />

      <div className="cert-grid">
        {certifications.map((certification) => (
          <article key={certification.title} className="content-card cert-card">
            {certification.badge ? (
              <img
                className="cert-badge"
                src={certification.badge}
                alt={`Badge ${certification.title}`}
              />
            ) : null}
            <div>
              <h3>{certification.title}</h3>
              <p className="muted">
                {certification.issuer} • {certification.date}
              </p>
            </div>
            <a className="cert-link" href={certification.href} target="_blank" rel="noreferrer">
              Ouvrir le PDF
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default CertificationsPage;
