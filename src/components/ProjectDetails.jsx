import { useEffect, useRef, useState } from "react";

export default function ProjectDetails({ project, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);
  const titleRef = useRef(null);
  const screenshots = [
    { image: project.image, alt: project.imageAlt, caption: "Vista de escritorio" },
    ...project.screenshots,
  ];
  const currentImage = screenshots[imageIndex];

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
    titleRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }, []);

  function moveImage(delta) {
    setImageIndex((index) => (index + delta + screenshots.length) % screenshots.length);
  }

  return (
    <div id={`project-details-${project.id}`} className="project-details"
      role="region" aria-labelledby={`project-title-${project.id}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); onClose(); }
      }}>
      <div className="project-details-heading">
        <div>
          <p className="card-sub">{project.sub}</p>
          <h3 id={`project-title-${project.id}`} ref={titleRef} tabIndex={-1}>{project.title}</h3>
        </div>
        <button type="button" className="detail-close" onClick={onClose}>Cerrar ficha <span aria-hidden="true">×</span></button>
      </div>

      <div className="project-gallery" role="group" aria-label={`Capturas de ${project.title}`}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            moveImage(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}>
        <figure>
          <div className="project-gallery-image">
            <img src={`${import.meta.env.BASE_URL}${currentImage.image}`} alt={currentImage.alt} />
          </div>
          <figcaption aria-live="polite" aria-atomic="true">
            {currentImage.caption} · {imageIndex + 1} / {screenshots.length}
          </figcaption>
        </figure>
        <div className="project-gallery-controls">
          <button type="button" onClick={() => moveImage(-1)} aria-label="Captura anterior">←</button>
          <div className="project-gallery-dots">
            {screenshots.map((screenshot, index) => (
              <button key={screenshot.image} type="button" aria-label={`Ver captura ${index + 1}: ${screenshot.caption}`}
                aria-pressed={imageIndex === index} onClick={() => setImageIndex(index)}>
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => moveImage(1)} aria-label="Captura siguiente">→</button>
        </div>
      </div>

      <div className="project-details-copy">
        <h4>Tecnologías</h4>
        <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <h4>Sobre el proyecto</h4>
        <p>{project.description}</p>
        <p>{project.context}</p>
        <h4>Qué incluye</h4>
        <ul className="project-features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="cta">
          <a className="btn" href={project.repository} target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">↗</span></a>
          <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noopener noreferrer">Abrir demo <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  );
}
