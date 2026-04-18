import PageHeader from "../components/PageHeader";
import { highlights, personalInfo } from "../data/portfolioData";

function ProfilePage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Profil"
        title="Construire des experiences web claires, utiles et modernes."
        description={personalInfo.summary}
      />

      <section className="hero-card">
        <div>
          <p className="eyebrow">A propos</p>
          <h3>{personalInfo.role}</h3>
          <p>
            Je combine developpement web, bonnes pratiques d'equipe et apprentissage continu pour
            concevoir des applications performantes. Mon parcours relie front-end, back-end,
            cloud et automatisation.
          </p>
        </div>
        <div className="hero-grid">
          {highlights.map((item) => (
            <article key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
