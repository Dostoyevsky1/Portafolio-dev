export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card-media">
        <span className="card-num" aria-hidden="true">{project.num}</span>
        <a
          className="project-preview"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver demo de ${project.title} (abre en otra pestaña)`}
        >
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={project.imageAlt}
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
      <div className="card-body">
        <span className="card-sub">{project.sub}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="card-links">
          <a href={project.repository} target="_blank" rel="noopener noreferrer"
            aria-label={`Repositorio de ${project.title} (abre en otra pestaña)`}>
            [GitHub repo]
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            aria-label={`Ver demo de ${project.title} (abre en otra pestaña)`}>
            [Ver demo ↗]
          </a>
        </div>
      </div>
    </article>
  );
}
