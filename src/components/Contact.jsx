import { useState } from 'react'

export default function Contact() {

  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const response = await fetch(
      'https://formspree.io/f/xnjwrrpp',
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (response.ok) {
      setSubmitted(true)
      event.target.reset()
    }
  }

  return (
    <section className="contact-section" id="contact">

      <div className="contact-left">

        <h2 className="contact-title">
          LLEVAMOS TU
          <br />
          ESPACIO AL
          <br />
          <span>SIGUIENTE NIVEL</span>
        </h2>

        <div className="contact-line"></div>

        <p className="contact-description">
          Completá el formulario y nos contactaremos contigo.
        </p>

      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Empresa / Espacio"
        />

        <textarea
          name="message"
          placeholder="Mensaje"
          rows="5"
          required
        ></textarea>

        <button type="submit">
          ENVIAR
        </button>

        {submitted && (
          <p className="success-message">
            Mensaje enviado correctamente.
          </p>
        )}

      </form>

    </section>
  )
}