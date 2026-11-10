import Projects from "./components/Projects.jsx";
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
  return <header className="nav"><Signature /><nav className="nav-links" aria-label="Navegación principal"><a href="#home">Inicio</a><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a href="#contacto">Contacto</a></nav><SocialLinks /></header>;
}

function Signature() {
  return <a className="logo" href="#home" aria-label="Fabrizio Arellano — Inicio"><span className="monogram" aria-hidden="true">FA<small>♠</small></span><span className="signature-name">Fabrizio<br />Arellano</span></a>;
}

const tags = (items) => <ul className="tags">{items.map((item) => <li key={item}>{item}</li>)}</ul>;


function SectionTitle({ children, className = "" }) { return <h2 className={`section-title ${className}`}>{children}</h2>; }

function App() {
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Header />
    <main id="contenido" tabIndex={-1}>
      <section className="hero" id="home"><div className="hero-text"><p className="hero-kicker">Desarrollador Junior</p><h1>Fabrizio<br />Arellano</h1><p className="hero-stack">React · Java · Spring Boot</p><p className="hero-desc">Desarrollo interfaces web con React y las integro con APIs REST.<br />También cuento con experiencia en Angular.</p><div className="cta"><a className="btn" href="#proyectos">Ver proyectos</a><a className="btn btn-ghost" href={cvPath} download="CV-Fabrizio-Arellano.pdf">Descargar CV</a></div></div><figure className="hero-art personal-card"><div className="portrait-window"><img src={assetPath("assets/avatar.jpg")} alt="Retrato ilustrado de Fabrizio con gafas y audífonos, inspirado en una carta de juego" /></div><figcaption><span className="portrait-name">Fabrizio Arellano</span><span className="portrait-location">Lima, Perú <span aria-hidden="true">♠</span></span></figcaption></figure></section>
      <Projects />
      <section id="sobre-mi" className="about-section"><SectionTitle>Sobre mí</SectionTitle><div className="about"><p className="about-lead">Mi punto fuerte es React. Mi perspectiva también incluye lo que ocurre detrás de la interfaz.</p><p>Soy estudiante de Ingeniería de Software en la UTP. En mis proyectos académicos conecto interfaces con APIs y bases de datos: una forma de entender el recorrido completo de una aplicación, desde la pantalla hasta la información que muestra.</p><p>Busco mi primera oportunidad como desarrollador junior para seguir creciendo en equipo y aportar mi experiencia con React, Java y Spring Boot.</p><ul className="langs"><li>Español <span>Nativo</span></li><li>Inglés <span>B2</span></li></ul></div></section>
      <section id="habilidades"><SectionTitle>Habilidades</SectionTitle><p className="section-intro">React es mi principal herramienta. Estas son las tecnologías que acompañan mi desarrollo web.</p><div className="skills-grid">{skillGroups.map(({ title, items, description, featured }) => <article className={`skill-card${featured ? " skill-featured" : ""}`} key={title}><h3>{title}</h3><p>{description}</p>{tags(items)}</article>)}</div></section>
      <div className="journey">
        <section id="experiencia"><SectionTitle>Experiencia académica</SectionTitle><article className="timeline-entry"><p className="xp-date">2023 — Actualidad</p><h3>Desarrollo full-stack</h3><p>Proyectos académicos de aplicaciones web, desde la interfaz hasta la persistencia de datos.</p><ul className="experience-points"><li><strong>Frontend.</strong> Componentes reutilizables e interfaces responsive con React; experiencia complementaria con Angular.</li><li><strong>Integración.</strong> APIs REST con Java y Spring Boot, bases de datos relacionales y pruebas de endpoints con Postman.</li></ul><a className="text-link" href="#proyectos">Explorar los proyectos</a></article></section>
        <section id="formacion"><SectionTitle>Formación</SectionTitle><article className="timeline-entry"><p className="xp-date">2023 — Actualidad</p><h3>Ingeniería de Software</h3><p className="education-school">Universidad Tecnológica del Perú</p><p>8.º ciclo · Lima, Perú</p><p>Formación práctica en desarrollo de software y metodologías ágiles, aplicada en proyectos académicos.</p><a className="text-link" href={cvPath} download="CV-Fabrizio-Arellano.pdf">Consultar mi CV</a></article></section>
      </div>
      <section id="contacto" className="contact"><div className="contact-heading"><SectionTitle className="contact-title">¿Trabajamos<br />juntos?</SectionTitle><p>Si buscas un desarrollador junior con enfoque en React, conversemos.</p></div><div className="contact-details"><a className="contact-email" href="mailto:arellano_04_26@hotmail.com">arellano_04_26@hotmail.com<span>Escríbeme por correo ↗</span></a><div className="contact-secondary"><a href="tel:+51948206622">+51 948-206-622</a><span>Lima, Perú</span></div><SocialLinks compact /></div></section>
    </main>
    <footer className="footer"><Signature /><p>© {new Date().getFullYear()} Fabrizio Arellano Garcia</p><a className="text-link" href="#home">Volver al inicio ↑</a></footer>
  </>;
}

export default App;
