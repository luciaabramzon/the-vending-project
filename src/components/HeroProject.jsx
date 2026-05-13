import projectMachine from '../assets/tvp.jpeg'

export default function HeroProject() {
  return (
    <section className="hero" id="project">
      <div className="overlay" />

      <img
        src={projectMachine}
        alt="The Vending Project"
        className="hero-image"
      />

      <div className="hero-content">

      <h1 className="hero-title">
  <span className="the-word">THE</span>

  <span className="vending-word">
    VENDING
  </span>

  <span className="project-word">
    PROJECT
  </span>
</h1>
<div className="hero-line"></div>

        <p className="hero-description">
        SOLUCIONES DE VENDING AUTOMATIZADO PARA LA NUEVA EXPERIENCIA DE CONSUMO
        </p>

        <a href="#shake" className="hero-button">
  CONOCÉ THE VENDING SHAKE
</a>
      </div>
    </section>
  )
}