import shakeMachine from '../assets/tvs.jpeg'
import fitnesslabLogo from '../assets/fitnesslab.png'

export default function VendingShake() {
  return (
    <section className="shake-section" id="shake">

      <div className="shake-right">
        <img
          src={shakeMachine}
          alt="The Vending Shake"
        />
      </div>

      <div className="shake-left">
        <p className="shake-subtitle">
          NUESTRA PRIMERA LÍNEA
        </p>

        <h2 className="shake-title">
          THE VENDING
          <br />
          <span>SHAKE</span>
        </h2>

        <div className="shake-line"></div>

        <p className="shake-description">
          SUPLEMENTACIÓN INTELIGENTE AL INSTANTE
        </p>

        <div className="shake-features">
          <div className="feature">
            <span>✓</span>
            PROTEÍNA
          </div>

          <div className="feature">
            <span>✓</span>
            PRE ENTRENO
          </div>

          <div className="feature">
            <span>✓</span>
            PRODUCTOS EXCLUSIVOS
          </div>

        </div>
        <div className="powered-by">
  <p>POWERED BY</p>

  <a
    href="https://fitnesslab.com.uy/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={fitnesslabLogo}
      alt="Fitnesslab"
    />
  </a>
</div>
      </div>

    </section>
  )
}