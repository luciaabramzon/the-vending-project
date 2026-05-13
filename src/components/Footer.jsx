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
          href="https://instagram.com/vendingproject"
          target="_blank"
          className="instagram-link"
        >
          <FiInstagram className="footer-icon" />
          @vendingproject
        </a>

        <a
          href="mailto:info@thevendingproject.com.uy"
          className="mail-link"
        >
          <FiMail className="footer-icon" />
          info@thevendingproject.com.uy
        </a>

      </div>

    </footer>
  )
}