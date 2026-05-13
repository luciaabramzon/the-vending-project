import shakeMachine from '../assets/tvs.jpeg'

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
            CREATINA
          </div>

          <div className="feature">
            <span>✓</span>
            ELECTROLITOS
          </div>
        </div>
      </div>

    </section>
  )
}