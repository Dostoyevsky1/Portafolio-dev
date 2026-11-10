import { useRef, useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetails from "./ProjectDetails.jsx";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const triggerRef = useRef(null);
  const selected = projects.find((project) => project.id === selectedId);

  function selectProject(project, trigger) {
    triggerRef.current = trigger;
    setSelectedId((current) => current === project.id ? null : project.id);
  }

  function closeDetails() {
    setSelectedId(null);
    triggerRef.current?.focus({ preventScroll: true });
    triggerRef.current?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }

  return (
    <section id="proyectos">
      <h2 className="section-title">Proyectos</h2>
      <p className="projects-intro">Selecciona un proyecto para explorar sus capturas, tecnologías y funcionamiento.</p>
      <div className="grid reveal">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}
            selected={selectedId === project.id} onSelect={selectProject} />
        ))}
      </div>
      {selected && <ProjectDetails key={selected.id} project={selected} onClose={closeDetails} />}
    </section>
  );
}
