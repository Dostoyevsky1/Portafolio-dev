export default function ProjectCard({ project, selected, onSelect }) {
  return (
    <article className={`card project-card${selected ? " is-selected" : ""}`}>
      <button className="project-card-trigger" type="button"
        aria-expanded={selected} aria-controls={selected ? `project-details-${project.id}` : undefined}
        aria-label={`${selected ? "Cerrar" : "Ver"} detalles de ${project.title}`}
        onClick={(event) => onSelect(project, event.currentTarget)}>
        <span className="card-media project-preview">
          <span className="card-num" aria-hidden="true">{project.num}</span>
          <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt}
            width="1440" height="900" loading="lazy" decoding="async" />
        </span>
        <span className="card-body">
          <span className="card-sub">{project.sub}</span>
          <span className="project-card-title">{project.title}</span>
          <span className="project-card-summary">{project.summary}</span>
          <span className="project-card-action">{selected ? "Cerrar detalles −" : "Explorar proyecto +"}</span>
        </span>
      </button>
    </article>
  );
}
