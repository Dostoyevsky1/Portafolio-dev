import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard.jsx";
import { projects } from "./data/projects.js";
import { skillGroups } from "./data/skills.js";

const assetPath = (file) => `${import.meta.env.BASE_URL}${file}`;
const cvPath = assetPath("CV-Fabrizio-Arellano.pdf");

function SocialLinks({ compact = false }) {
  const size = compact ? 20 : 22;
  return (
    <div className="nav-social">
      <a href="https://github.com/Dostoyevsky1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
      </a>
      <a href="https://www.linkedin.com/in/fabrizio-arellano-78546838b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" /></svg>
      </a>
      {!compact && <a href="mailto:arellano_04_26@hotmail.com" aria-label="Email"><svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 6L22 7" /></svg></a>}
    </div>
  );
}

function Header() {
  return <header className="nav"><a className="logo" href="#home">Fabrizio<span>.Dev</span></a><nav className="nav-links" aria-label="Navegación principal"><a href="#home">Inicio</a><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav><SocialLinks /></header>;
}

const tags = (items) => <ul className="tags">{items.map((item) => <li key={item}>{item}</li>)}</ul>;


function SectionTitle({ children, className = "" }) { return <h2 className={`section-title ${className}`}>{children}</h2>; }

function App() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <Header />
    <main>
      <section className="hero" id="home"><div className="hero-text"><p className="hero-kicker">&lt;Desarrollador Junior /&gt;<span className="cursor" aria-hidden="true" /></p><h1>Fabrizio<br />Arellano</h1><p className="hero-stack">React · Java · Spring Boot</p><p className="hero-desc">Desarrollo interfaces web con React y las integro con APIs REST.<br />También cuento con experiencia en Angular.</p><div className="cta"><a className="btn" href="#proyectos">Ver Proyectos</a><a className="btn btn-ghost" href={cvPath} download="CV-Fabrizio-Arellano.pdf">Descargar CV</a></div></div><div className="hero-art"><img src={assetPath("assets/avatar.jpg")} alt="Fabrizio Arellano Garcia" /></div></section>
      <section id="proyectos"><SectionTitle>Proyectos</SectionTitle><div className="grid reveal">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></section>
      <section id="sobre-mi"><SectionTitle>Sobre mí</SectionTitle><div className="about reveal"><p>Soy estudiante de Ingeniería de Software (8.º ciclo, UTP) con formación aplicada en desarrollo web full-stack. Mi principal fortaleza en frontend es React, con el que construyo interfaces responsive y componentes reutilizables; también cuento con experiencia en Angular. He desarrollado proyectos académicos de gestión con Java y Spring Boot, integrando APIs REST, bases de datos relacionales, pruebas de endpoints con Postman y control de versiones con Git.</p><p>Mi objetivo es iniciar mi carrera profesional como Desarrollador Junior, aportando a equipos que valoren el trabajo en equipo, la proactividad y la entrega responsable.</p><ul className="langs"><li>Español — Nativo</li><li>Inglés — B2</li></ul></div></section>
      <section id="habilidades"><SectionTitle>Habilidades</SectionTitle><div className="skills-grid reveal">{skillGroups.map(({ title, items }) => <div className="skill-card" key={title}><h3>{title}</h3>{tags(items)}</div>)}</div></section>
      <section id="experiencia"><SectionTitle>Experiencia académica</SectionTitle><div className="xp-list reveal"><article className="xp-card"><span className="xp-date">2023 — Actualidad</span><h3>Desarrollo Full-Stack (académico)</h3><p>Desarrollo de aplicaciones web full-stack, con mayor dominio de React para construir interfaces responsive y componentes reutilizables, además de experiencia con Angular. Integración del frontend con APIs REST desarrolladas en Java y Spring Boot, conexión a bases de datos relacionales y pruebas de endpoints mediante Postman.</p></article></div></section>
      <section id="formacion"><SectionTitle>Formación</SectionTitle><div className="xp-list reveal"><article className="xp-card"><span className="xp-date">2023 — Actualidad</span><h3>Ingeniería de Software — UTP, Lima</h3><p>8.º ciclo. Formación orientada al desarrollo de software con enfoque práctico y metodologías ágiles.</p></article></div></section>
      <section id="contacto" className="contact"><SectionTitle className="contact-title">¿Trabajamos juntos?</SectionTitle><div className="contact-box reveal"><ul className="contact-info"><li><a href="mailto:arellano_04_26@hotmail.com">arellano_04_26@hotmail.com</a></li><li><a href="tel:+51948206622">+51 948-206-622</a></li><li>Lima, Perú</li></ul><div className="cta"><a className="btn" href="mailto:arellano_04_26@hotmail.com">Escríbeme</a><a className="btn btn-ghost" href="https://github.com/Dostoyevsky1" target="_blank" rel="noopener noreferrer">GitHub</a></div></div></section>
    </main>
    <footer className="footer"><a className="logo" href="#home">Fabrizio<span>.Dev</span></a><p>© 2026 Fabrizio Arellano Garcia — Lima, Perú</p><SocialLinks compact /></footer>
  </>;
}

export default App;
