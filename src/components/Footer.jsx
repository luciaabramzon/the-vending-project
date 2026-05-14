import { FiInstagram, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">

        <span className="footer-main">
          THE VENDING
        </span>

        <span className="footer-secondary">
          PROJECT
        </span>

      </div>

      <div className="footer-contact">

        <a
          href="https://instagram.com/thevendingprojectuy"
          target="_blank"
          rel='noopener noreferrer'
          className="instagram-link"
        >
          <FiInstagram className="footer-icon" />
          @thevendingprojectuy
        </a>

        <a
          href="mailto:info@thevendingproject.com.uy"
          className="mail-link"
          rel='noopener noreferrer'
        >
          <FiMail className="footer-icon" />
          info@thevendingproject.com.uy
        </a>

      </div>

    </footer>
  )
}