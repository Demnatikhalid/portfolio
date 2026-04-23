import PageHeader from "../components/PageHeader";
import { projects } from "../data/portfolioData";

function ProjectsPage() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="Projets"
        title="Projets réalisés"
        description="Découvrez les projets que j'ai développés, combinant design moderne, architecture solide et technologies innovantes."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <p className="project-period">{project.period}</p>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-details">
              <h4>Points clés</h4>
              <ul>
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h4>Technologies</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
